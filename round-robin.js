const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer({});

let current = 0;

const roundRobin = (servers, req, res) => {
  const target = servers[current];
  console.log(target);

  proxy.web(req, res, {
    target: `http://${target.host}:${target.port}`,
  });
  current++;
  if (current >= servers.length) {
    current = 0;
  }
};

module.exports = roundRobin;
