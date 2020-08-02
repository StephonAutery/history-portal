const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const routes = require("./routes");

// ################ installed but not in use #####################
// var HttpsProxyAgent = require('https-proxy-agent');
// var request = require('request');
// ################ installed but not in use #####################


// ################ QuotaGuard #####################
// var http, options, proxy, url;

// http = require("http");

// url = require("url");

// proxy = url.parse("process.env.QUOTAGUARDSTATIC_URL");
// target  = url.parse("https://history-portal.herokuapp.com");

// options = {
//   hostname: proxy.hostname,
//   port: proxy.port || 80,
//   path: target.href,
//   headers: {
//     "Proxy-Authorization": "Basic " + (new Buffer.from("proxy.auth").toString("base64")),
//     "Host" : target.hostname
//   }
// };

// http.get(options, function(res) {
//   res.pipe(process.stdout);
//   return console.log("status code", res.statusCode);
// });
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

// passport middleware
// app.use(passport.initialize());

// // passport config
// require("./config/passport")(passport);

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
// }

// const fs = require('fs');

// async function print(path) {
//     console.log("----- path -");
//     console.log(path);
//     console.log("----- path -");
//   const dir = await fs.promises.opendir(path);
//   for await (const dirent of dir) {
//     console.log(dirent.name);
//   }
// }
// print('./client/public/images/pres').catch(console.error);

// routes
// app.use("/api/users", users);
app.use(routes);

app.listen(port, () => console.log(`server running on port ${port} !`));