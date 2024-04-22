"use strict";

var mongoose = require("mongoose");

mongoose.set("strictQuery", false);
var mongoDB = "mongodb+srv://".concat(process.env.USER_ID, ":").concat(process.env.USER_KEY, "@cluster0.ozxq9uz.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0");
main()["catch"](function (err) {
  return console.log(err);
});

function main() {
  return regeneratorRuntime.async(function main$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(mongoose.connect(mongoDB));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}

var createError = require("http-errors");

var express = require("express");

var path = require("path");

var cookieParser = require("cookie-parser");

var logger = require("morgan");

var compression = require("compression");

var helmet = require("helmet");

var indexRouter = require("./routes/index");

var catalogRouter = require("./routes/catalog");

var app = express(); // view engine setup

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(compression());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express["static"](path.join(__dirname, "public")));
app.use("/", indexRouter);
app.use("/catalog", catalogRouter);
app.use(helmet.contentSecurityPolicy({
  directives: {
    "script-src": ["'self'", "code.jquery.com", "cdn.jsdelivr.net"]
  }
})); // Set up rate limiter: maximum of twenty requests per minute

var RateLimit = require("express-rate-limit");

var limiter = RateLimit({
  windowMs: 1 * 60 * 1000,
  // 1 minute
  max: 20
}); // Apply rate limiter to all requests

app.use(limiter); // catch 404 and forward to error handler

app.use(function (req, res, next) {
  next(createError(404));
}); // error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render("error");
});
module.exports = app;