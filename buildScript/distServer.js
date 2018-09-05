var express=require('express');
var path=require('path');
var open=require('open');
import compression from 'compression';

/* eslint-disable no-console*/
var port  =  3000;
var app = express();

app.use(express.static('dist'));
app.use(compression());
app.get('/',function(req,res){
res.sendFile(path.join(__dirname,'../dist/index.html'));

});

app.get('/Users',function(req,res){
  res.json([
    {"id":1,"firstName":"xyz","email":"abc@gmail.com"}
  ]);
  });

app.listen(port,function(err){
  if(err)
  {
    console.trace(err);
  }
  else{
    open('http://localhost:'+port);
  }
});
