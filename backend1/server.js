const express = require('express');
const os = require('os');
const app = express();
const port =  3001;

app.get('/', (req, res) => {
  res.send(`backend1 - host:${os.hostname()} - pid:${process.pid} - xfwd:${req.headers['x-forwarded-for'] || 'none'} - remote:${req.ip}`);
});

app.get('/health', (req, res) => {
  res.json({status: 'ok', host: os.hostname()});
});

app.listen(port, '0.0.0.0', () => console.log(`backend1 listening ${port}`));
