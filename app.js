const http = require('http');

const router = require('./router');

// const server = http.createServer(router.handler);
const createServer = () => {
    return http.createServer(router.handler);
};

createServer().listen(3001);