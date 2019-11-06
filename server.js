var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.urlencoded({ extended: true}));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.get("/api/Friendslist", function(req, res) {
    return res.json(surveyResponse);
})



app.post("/api/firendslist", function(req, res) {
    surveyResponse.push(req.body);
    console.log(surveyResponse);
    res.end();
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    console.log("http://localhost:" + PORT);
});