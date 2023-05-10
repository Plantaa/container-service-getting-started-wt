var express = require('express')
var os = require("os");
var hostname = os.hostname();
var app = express()

app.get('/', function (req, res) {
  console.error("404 error in application")
  res.status(404).json({ message: "This page is missing" })
})
app.listen(8080, function () {
  console.log('Sample app is listening on port 8080.')
})
