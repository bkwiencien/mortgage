var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
console.log("directory = " + __dirname);
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public/assets/javascript'));

var PORT = process.env.PORT || 9000;

app.use(bodyParser.urlencoded({extended: false}));
 
app.use(methodOverride('_method'))

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/mortgage_controller.js');
app.use('/', routes);

app.listen(PORT, function() {
  console.log("Listening at %s", PORT);
});
