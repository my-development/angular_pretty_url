var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoose        = require("mongoose");


var gzippo = require('gzippo');
var express = require('express');
var fs = require('fs');
var modRewrite = require('connect-modrewrite');
var app = express();

app.use(gzippo.staticGzip("" + __dirname + "/dist"));
//app.use(gzippo.staticGzip("" + __dirname + "/app"));

var logfile = fs.createWriteStream(__dirname +'/logfile.log', {flags: 'a'});

//app.use(morgan('dev'));  //logger  combined
app.use(morgan('dev', {stream: logfile}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(methodOverride());

// MongoDB configuration
var mongodbConnection = process.env.MONGODB_HOST || 'localhost';
//mongoose.connect('mongodb://localhost/my_test1', function(err, res) {

mongoose.connect('mongodb://' + mongodbConnection + '/my_test1', function(err, res) {
  if(err) {
    console.log('error connecting to MongoDB Database. ' + err);
  } else {
    console.log('Connected to Database');
  }
});

var tshirt = require("" + __dirname + '/lib/tshirt.js')(app);
//routes = require('./routes/tshirt')(app);

app.all('/*', function(req, res, next) {
  // Just send the index.html for other files to support HTML5Mode
  res.sendFile('dist/index.html', { root: __dirname });
//  res.sendfile('app/index.html', { root: __dirname });
});

app.use(modRewrite([
    '!/api|/assets|\\.png|\\.jpeg|\\.gif|\\.html|\\.less|\\.js|\\.css|\\woff|\\ttf|\\swf$ /index.html [L]'
	]));

app.listen(process.env.PORT || 5000);
console.log("Server is running at port #" + (process.env.PORT || 5000).toString());