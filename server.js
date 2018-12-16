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

