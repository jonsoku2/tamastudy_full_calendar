const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', function(req, res) {
  res.json({
    string: "'Hello World!'"
  });
});

app.listen(5000, function() {
  console.log('Example app listening on port 5000!');
});
