// creating functions to route my files
const fs = require("fs");
const myEmitter = require("./emitter");

// emit a route access event for each individual route
function aboutPage(path, response, statusCode) {
  myEmitter.emit("routeAccess", "about", statusCode);
  displayFile(path, response, statusCode);
}
function blogPage(path, response, statusCode) {
  myEmitter.emit("routeAccess", "blog", statusCode);
  displayFile(path, response, statusCode);
}
function contactPage(path, response, statusCode) {
  myEmitter.emit("routeAccess", "contact", statusCode);
  displayFile(path, response, statusCode);
}
function developementPage(path, response, statusCode) {
  myEmitter.emit("routeAccess", "developement", statusCode);
  displayFile(path, response, statusCode);
}
function indexPage(path, response, statusCode) {
  myEmitter.emit("routeAccess", "index", statusCode);
  displayFile(path, response, statusCode);
}
function productsPage(path, response, statusCode) {
  myEmitter.emit("routeAccess", "products", statusCode);
  displayFile(path, response, statusCode);
}
function subscribePage(path, response, statusCode) {
  myEmitter.emit("routeAccess", "subscribe", statusCode);
  displayFile(path, response, statusCode);
}

function superSecretPage(path, response, statusCode, auth) {
  if (auth === true) {
    myEmitter.emit("routeAccess", "superSecret", 200);
    displayFile(path, response, statusCode);
  } else {
    myEmitter.emit("routeDenied", "superSecret", 401);
    displayFile(path, response, statusCode);
  }
}

function displayFile(path, response, statusCode) {
  fs.readFile(path, function (err, data) {
    if (err) {
      console.log(err);
      response.end();
    } else {
      //console.log(`Requested URL: ${path} received`);
      myEmitter.emit("fileRead", path);
      response.writeHead(statusCode, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    }
  });
}

module.exports = {
  displayFile,
  aboutPage,
  blogPage,
  contactPage,
  developementPage,
  indexPage,
  productsPage,
  subscribePage,
  superSecretPage,
};
