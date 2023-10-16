// creating functions to route my files
const fs = require("fs");
const myEmitter = require("./emitter");
function aboutPage(path, response, statusCode) {
  displayFile(path, response, statusCode);
}
function blogPage(path, response, statusCode) {
  displayFile(path, response, statusCode);
}
function contactPage(path, response, statusCode) {
  displayFile(path, response, statusCode);
}
function developementPage(path, response, statusCode) {
  displayFile(path, response, statusCode);
}
function indexPage(path, response, statusCode) {
  displayFile(path, response, statusCode);
}
function productsPage(path, response, statusCode) {
  displayFile(path, response, statusCode);
}
function subscribePage(path, response, statusCode) {
  displayFile(path, response, statusCode);
}

function superSecretPage(path, response, statusCode) {
  displayFile(path, response, statusCode);
}

// error page function
function errorPage(path, response, statusCode) {
  displayFile(path, response, statusCode);
}

function displayFile(path, response, statusCode) {
  fs.readFile(path, function (err, data) {
    if (err) {
      console.log(err);
      response.end();
    } else {
      //console.log(`Requested URL: ${path} received`);
      response.writeHead(statusCode, {
        "Content-Type": "text/html",
      });
      response.write(data);
      response.end();
    }
  });
}

module.exports = {
  aboutPage,
  blogPage,
  contactPage,
  developementPage,
  indexPage,
  productsPage,
  subscribePage,
  superSecretPage,
  errorPage,
};
