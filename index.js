const auth = require("./assets/auth.js");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http").Server(app);
const port = 3000;
http.listen(port);
console.log("Express server running on" + port);
console.log(auth.getDBURL());

//ROUTES
app.use(express.static("client/"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post("/login", (request, response) => {
   let requestUsername = request.body;
   let requestPassword = request.body;

   console.log(requestUsername, requestPassword);

   response.sendStatus(500);
});

