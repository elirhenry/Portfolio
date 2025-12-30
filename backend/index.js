// index.js
const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Portfolio backend is running');
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
