const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js app\n');
});

app.listen(3000, () => {
  console.log('Node.js app listening on port 3000');
});
