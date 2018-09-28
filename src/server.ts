import http from 'http';

const runServer = (app) => {
  const server = http.createServer(app());

  server.listen('4040');
};

export default runServer;
