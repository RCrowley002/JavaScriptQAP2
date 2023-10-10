// JS QAP2 Server
const http = require("http");

// Creating the HTTP server
const httpServer = http.createServer((req, res) => {
  // Getting the requested URL
  const url = req.url;

  // console log for the requested URL
  console.log(`Requested URL: ${url}`);
});

// Setting the port to listen on (3000)
const port = 3000;

// Starting the server
httpServer.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
