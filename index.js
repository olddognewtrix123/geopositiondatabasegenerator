
//git add -A  git commit -m "schema and mocha unhunh"  git push origin master
var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var path = process.cwd();


// middleware that exposes the controllers
app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/public', express.static(process.cwd() + '/public'));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/main.html");
});


app.route('/goData')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});



app.listen(port, () => {
    console.log("Server listening on port " + port);
});