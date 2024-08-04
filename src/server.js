const express = require("express");
// note ES5 syntax is rqeuired. can't use import yet
const app = express()
//just convention to remap express to app

app.use("/website1",express.static("website1"))
// first parameter is the end point written by the user in the browser bar after the web address of the server, the second parameter routes any requests to the folder "website1" on our server. 
app.use("/",express.static("website2"))
// "/" is the route with no endpoint and then is mapped to folder website2

app.listen(5001, () => console.log("server is listening on port 5001"));
// first paramater is the port to listen on and second parameter is a function to execute upon execution