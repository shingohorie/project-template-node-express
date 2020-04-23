const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));

// サーバ起動
const server = app.listen(process.env.PORT || 8000, function (){
  var port = server.address().port;
  console.log('Listening at http://localhost:%s', port);
});
