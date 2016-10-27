var express = require('express');
var app = express();
var favicon = require('serve-favicon');
var path = require('path');

//body-parer
app.use(require('body-parser')());

//端口
app.set('port',process.env.PORT || 3006);

//静态资源
app.use(express.static(__dirname + '/public'));
//图标
//app.use(favicon(path.join(__dirname,'/public','favicon.ico')));

//路由
app.get('/',function(req,res){
    res.type('text/html');
    res.send('<span style=color:green>Welcome to my site</span>')
});

//404
app.use(function(req,res){
    res.type('text/html');
    res.status(404);
    res.send('<span style="color:red">404 - Not a found</span>');
});
//500
app.use(function(err,req,res){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'),function(){
    console.log('Express started on http://localhost:'+app.get('port')+';press to Ctrl+c to terminate.')
});