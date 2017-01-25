var https = require('https');
var fs = require('fs');
var path = require('path');

const options = {
  key: fs.readFileSync('keys/key.pem'),
  cert: fs.readFileSync('keys/cert.pem')
}

var handler = function(request, response) {
  var url = request.url;
  var extension = url.split('.')[1] || "html";
  if (url === '/') {
    url = "index.html"
  }
  fs.readFile(path.join(__dirname, 'public', url), function(err, file){
    if (err) throw err;
    response.writeHead(200, { "content-type": "text/" + extension });
    response.end(file);
  });
}

https.createServer(options, handler).listen(8000);
