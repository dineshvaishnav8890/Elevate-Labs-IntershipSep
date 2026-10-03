const http = require('http');
const assert = require('assert');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello from DevOps CI/CD Project!</h1>');
});

server.listen(3001, () => {
  http.get('http://localhost:3001', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        assert.strictEqual(res.statusCode, 200);
        assert.ok(data.includes('Hello from DevOps CI/CD Project!'));
        console.log('Test passed!');
      } catch (error) {
        console.error('Test failed:', error.message);
        process.exitCode = 1;
      } finally {
        server.close();
      }
    });
  }).on('error', (error) => {
    console.error(error);
    server.close();
    process.exitCode = 1;
  });
});
