const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const routes = require("./routes");

// ################ QuotaGuard #####################
var http, options, proxy, url;

http = require("http");

url = require("url");

proxy = url.parse("process.env.QUOTAGUARDSTATIC_URL");
target  = url.parse("https://history-portal.herokuapp.com");

options = {
  hostname: proxy.hostname,
  port: proxy.port || 80,
  path: target.href,
  headers: {
    "Proxy-Authorization": "Basic " + (new Buffer.from("proxy.auth").toString("base64")),
    "Host" : target.hostname
  }
};

http.get(options, function(res) {
  res.pipe(process.stdout);
  return console.log("status code", res.statusCode);
});
// ################ QuotaGuard #####################

const app = express();

const port = process.env.PORT || 3001; // config for Heroku Deployment


// middleware
app.use(
    bodyParser.urlencoded({
        extended: true
    }),
    bodyParser.json(),
    passport.initialize()
);

// dbconfig
const db = require("./config/keys").mongoURI;
// connect to mongoDB
mongoose.connect(
    db,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        retryWrites: true
    }
)
    .then(() => console.log("- mongoDB successfully connected -"))
    .catch(err => console.log(err));

app.use(routes);

app.listen(port, () => console.log(`server running on port ${port} !`));