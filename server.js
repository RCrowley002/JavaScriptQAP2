// JS QAP2 Server
const http = require("http");

// Creating the HTTP server
const server = http.createServer((request, response) => {
  // Getting the requested URL (step 3)
  const url = request.url;
  // console log for the requested URL
  //console.log(`Requested URL: ${url}`);

  let path = "./views/";

  // Implementing routing logic using switch statement (step 4)
  switch (url) {
    case "/":
      path += "index.html";
      console.log(`Requested URL: ${url} received`);
      break;

    case "/about":
      path += "about.html";
      console.log(`Requested URL: ${url} received`);
      break;

    case "/contact":
      path += "contact.html";
      console.log(`Requested URL: ${url} received`);
      break;

    case "/products":
      path += "products.html";
      console.log(`Requested URL: ${url} received`);
      break;

    case "/subscribe":
      path += "subscribe.html";
      console.log(`Requested URL: ${url} received`);
      break;

    case "/blog":
      path += "blog.html";
      console.log(`Requested URL: ${url} received`);
      break;

    case "/developement":
      path += "developement.html";
      console.log(`Requested URL: ${url} received`);
      break;
  }
});

// Setting the port to listen on (3000)
const port = 3000;

// Starting the server
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
