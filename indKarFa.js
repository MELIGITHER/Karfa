
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const nodemailer = require("nodemailer");

var iso88592 = require('iso-8859-2');
//const utf8 = require('utf8');

app.use(express.static(__dirname + '/Script'));
//Store all JS and CSS in Scripts folder.In css/images- all images




console.log(path.dirname);

app.use(express.static(__dirname + '/Pages'));
//Store all HTML files in Pages folder.

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/Pages/indKarFa.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/Pages/about.html'));
});

app.use('/', router);
app.listen(process.env.PORT || 3000 ,function(){
    console.log("up and running on port "+process.env.PORT);
});