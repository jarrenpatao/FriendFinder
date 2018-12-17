// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// home.html to be set as Index.html
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
