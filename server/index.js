const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
app.use(express.static(path.resolve('dist')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`UI Loaded on: http://localhost:${port}`));
