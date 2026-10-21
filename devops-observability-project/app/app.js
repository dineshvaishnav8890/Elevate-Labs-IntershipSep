const express = require('express');
const fs = require('fs');
const path = require('path');
const client = require('prom-client');

const app = express();
const PORT = 3000;
const logDir = path.join(__dirname, 'logs');
const logFile = path.join(logDir, 'app.log');
fs.mkdirSync(logDir, { recursive: true });

const register = new client.Registry();
client.collectDefaultMetrics({ register });

const httpRequests = new client.Counter({
  name: 'demo_http_requests_total',
  help: 'Total HTTP requests handled by the demo application',
  labelNames: ['method', 'route', 'status'],
  registers: [register]
});
const requestDuration = new client.Histogram({
  name: 'demo_http_request_duration_seconds',
  help: 'HTTP request duration in seconds',
  labelNames: ['method', 'route', 'status'],
  buckets: [0.01, 0.05, 0.1, 0.25, 0.5, 1, 2],
  registers: [register]
});

function log(level, message, extra = {}) {
  const record = { timestamp: new Date().toISOString(), level, service: 'observability-demo-app', message, ...extra };
  fs.appendFileSync(logFile, JSON.stringify(record) + '\n');
  console.log(JSON.stringify(record));
}

app.use((req, res, next) => {
  const started = process.hrtime.bigint();
  res.on('finish', () => {
    const route = req.route?.path || req.path;
    const status = String(res.statusCode);
    const seconds = Number(process.hrtime.bigint() - started) / 1e9;
    httpRequests.labels(req.method, route, status).inc();
    requestDuration.labels(req.method, route, status).observe(seconds);
    log(res.statusCode >= 500 ? 'error' : 'info', 'HTTP request completed', {
      method: req.method, path: req.path, status: res.statusCode, duration_seconds: Number(seconds.toFixed(4))
    });
  });
  next();
});

app.get('/', (req, res) => res.json({
  project: 'Complete Observability System',
  message: 'Application is running',
  endpoints: ['/health', '/api/success', '/api/error-demo', '/metrics']
}));
app.get('/health', (req, res) => res.json({ status: 'UP', timestamp: new Date().toISOString() }));
app.get('/api/success', (req, res) => {
  log('info', 'Sample business operation succeeded', { operation: 'success-demo' });
  res.json({ result: 'success', message: 'This request should appear in metrics, logs, and traces.' });
});
app.get('/api/error-demo', (req, res) => {
  log('error', 'Intentional demo error generated', { operation: 'error-demo', error_code: 'DEMO_500' });
  res.status(500).json({ result: 'error', message: 'Intentional demo error for observability practice.' });
});
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.listen(PORT, '0.0.0.0', () => log('info', 'Application started', { port: PORT }));
