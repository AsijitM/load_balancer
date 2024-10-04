const http = require("http");
const roundRobin = require("./round-robin");
const leastConnections = require("./least-connections");
const serverConfig = require("./config.json").servers;

const servers = serverConfig.map((server) => ({
  ...server,
  connections: 0,
}));

const loadBalancingAlgorithm = "least-connections";

const server = http.createServer((req, res) => {
  if (loadBalancingAlgorithm === "round-robin") {
    roundRobin(servers, req, res);
  } else if (loadBalancingAlgorithm === "least-connections") {
    leastConnections(servers, req, res);
  } else {
    res.write(500);
    res.end("Invalid load balancing algorithm");
  }
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
