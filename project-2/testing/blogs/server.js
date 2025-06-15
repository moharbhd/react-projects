const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

  //* set headers
  res.setHeader("Content-Type", "text/html");

  let path = './pages/';
  switch (req.url) {
    case '/':
      path += 'home.html'
      res.statusCode = 200;
      break;
    case '/about.html':
      path += 'about.html'
      res.statusCode = 200;
      break;
    case '/blog.html':
      path += 'blog.html'
      res.statusCode = 200;
      break;
  
    default:
      path += '404.html'
      res.statusCode = 404;
      break;
  }
 
  //* read file return html page
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("Listening for Req on Port 3000");
});
