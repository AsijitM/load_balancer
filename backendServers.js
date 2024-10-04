const http = require("http");
const serverConfig = require("./config.json").servers;

const createServer = (host, port, timeout) => {
  const server = http.createServer((req, res) => {
    setTimeout(() => {
      res.writeHead(200);
      res.end(`server response from port ${port}`);
    }, timeout);
  });
  server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
  });
};

serverConfig.forEach((server) => {
  createServer(server.host, server.port, server.timeout);
});
