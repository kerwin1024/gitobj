var express = require('express');
var app = express();

//设置handelbars 视图引擎

var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

var favicon = require('serve-favicon');
var path = require('path');
var users = require('./routes/users');
app.use('/users',users);    

//body-parer
app.use(require('body-parser')());

//端口
app.set('port',process.env.PORT || 3006);

//静态资源
app.use(express.static(__dirname + '../public'));
//图标
app.use(favicon(path.join(__dirname,'/public','favicon.ico')));

//路由
app.get('/',function(req,res){
    res.type('text/html');
    res.send('<span style="color:green">Welcome to my site</span>')
});

// jsonp
app.get('/getinfo', function (req, res) {
    var _callback = req.query.callback;
    var _data = {
            phone: '17623202231',
            name: 'Bill Node.js'
        };
    if (_callback) {
        res.type('text/javascript');
        //JSON.stingify(obj)#把对象转换成json格式的字符串
        //JSON.parse(str)#把字符串转换成对象
        res.send(_callback + '(' + JSON.stringify(_data) + ')');
    }
    else {
        res.json(_data);
    }
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