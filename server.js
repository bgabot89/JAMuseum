//loads the express library to the app
var express = require("express"),
		app = express();

//middleware to allow use of ejs
// app.set("view engine", "ejs");

//allows for static files i.e... image, css and javascript files
app.use("/static", express.static("public"));

//allows use of node_modules files
app.use('/scripts', express.static(__dirname + '/node_modules/'));

//renders index.html
app.use(function(req,res){
	res.sendFile(__dirname + '/views/index.html');
});

//connects server to local port 3000
app.listen(process.env.PORT  || 3000, function (){
  console.log("listening on port 3000");
});
