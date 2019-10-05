const router = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Practice1:register</title><head>');
        res.write('<body>');
        res.write('<h1>Hello there!</h1>');
        res.write('<h3>Please register with your full name:</h3>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="name"><button type="submit">Submit</button></form>');
        res.write('<a href="/users">Show all users</a>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    } else if (url === '/create-user' && method === "POST") {
        const name = [];
        req.on('data', dataChunck => {
            name.push(dataChunck);
        });
        req.on('end', () => {
            const parsedData = Buffer.concat(name).toString();
            const userName = parsedData.split('=')[1];
            console.log('New user: ' + userName);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    } else if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Practice1:users</title><head>');
        res.write('<body>');
        res.write('<h1>User list: </h1>');
        res.write('<ul><li>James</li><li>Diego</li><li>Emma</li><li>Roman</li></ul>');
        res.write('<a href="/">Register Page</a>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
};

module.exports = {
    handler: router
};