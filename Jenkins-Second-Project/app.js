const http = require('http');
const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end('<h1>Node.js App Deployed Successfully!</h1><p>Built with Jenkins and Docker.</p>');
});
server.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
