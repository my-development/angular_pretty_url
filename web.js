var gzippo = require('gzippo');
var express = require('express');
var modRewrite = require('connect-modrewrite');
var app = express();
//app.use(express.logger('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));

app.all('/*', function(req, res, next) {
  // Just send the index.html for other files to support HTML5Mode
  res.sendfile('dist/index.html', { root: __dirname });
});

app.use(modRewrite([
    '!/api|/assets|\\.png|\\.jpeg|\\.gif|\\.html|\\.less|\\.js|\\.css|\\woff|\\ttf|\\swf$ /index.html [L]'
	]));
app.listen(process.env.PORT || 5000);
console.log("Server is running at port #" + (process.env.PORT || 5000).toString());