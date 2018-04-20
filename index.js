var express = require('express'),
  app = express();

app.get('/', function(req, res){
  res.json({message: "Hi there from express"});
})

app.listen(3000, function(){
  console.log("App at port 3000");
});
