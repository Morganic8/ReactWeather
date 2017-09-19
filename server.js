var express = require('express');

//Create are app
var app = express();

app.use(express.static('public'));

app.listen(3000,function(){
  console.log('express server is on port 3000');
});
