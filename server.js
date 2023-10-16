// JS QAP2 Server
const http = require("http");
const routes = require("./routes");
const myEmitter = require("./emitter");

// setting up event listeners for accessed, denied and file paths
myEmitter.on("routeAccess", (route, statusCode) => {
  console.log(`Route accessed: ${route} \nStatus code: ${statusCode}`);
});

myEmitter.on("routeDenied", (route, statusCode) => {
  console.log(`Route denied: ${route} \nStatus code: ${statusCode}`);
});

myEmitter.on("fileRead", (path) => {
  console.log(`File read: ${path}`);
});

// Creating the HTTP server
const server = http.createServer((request, response) => {
  // Getting the requested URL (step 3)
  const url = request.url;
  // console log for the requested URL
  //console.log(`Requested URL: ${url}`);

  let path = "./views";

  // Implementing routing logic using switch statement (step 4)
  switch (url) {
    case "/":
      path += "/index.html";
      //console.log(`Requested URL: ${url} received`);
      routes.indexPage(path, response, 200);
      break;

    case "/about":
      path += "/about.html";
      //console.log(`Requested URL: ${url} received`);
      routes.aboutPage(path, response, 200);
      break;

    case "/contact":
      path += "/contact.html";
      //console.log(`Requested URL: ${url} received`);
      routes.contactPage(path, response, 200);
      break;

    case "/products":
      path += "/products.html";
      //console.log(`Requested URL: ${url} received`);
      routes.productsPage(path, response, 200);
      break;

    case "/subscribe":
      path += "/subscribe.html";
      //console.log(`Requested URL: ${url} received`);
      routes.subscribePage(path, response, 200);
      break;

    case "/blog":
      path += "/blog.html";
      //console.log(`Requested URL: ${url} received`);
      routes.blogPage(path, response, 200);
      break;

    case "/developement":
      path += "/developement.html";
      //console.log(`Requested URL: ${url} received`);
      routes.developementPage(path, response, 200);
      break;

    // creating a page that exists but cannot be accessed

    case "/superSecret":
      let auth = false;
      path += "/superSecret.html";
      routes.superSecretPage(path, response, 200, auth);
      break;
  }
});

// Setting the port to listen on (3000)
const port = 3000;

// Starting the server
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
