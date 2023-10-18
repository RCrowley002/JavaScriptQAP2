// creating functions to route my files
const fs = require("fs");

function aboutPage(path, response) {
  displayFile(path, response);
}
function blogPage(path, response) {
  displayFile(path, response);
}
function contactPage(path, response) {
  displayFile(path, response);
}
function developementPage(path, response) {
  displayFile(path, response);
}
function indexPage(path, response) {
  displayFile(path, response);
}
function productsPage(path, response) {
  displayFile(path, response);
}
function subscribePage(path, response) {
  displayFile(path, response);
}

function displayFile(path, response) {
  fs.readFile(path, function (err, data) {
    if (err) {
      console.log(err);
      response.end();
    } else {
      console.log(`Requested URL: ${path} received`);
      response.writeHead(200, {
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
};
