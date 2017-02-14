var express = require("express");
var app = express();

// Load Express Configuration
require("./expressConfig")(app, express);

// Root route
app.get("/", function(req, res) {
    res.sendfile("index.html", { root: app.settings.views });
});

// Load routes
require("./routes/user")(app);
require("./routes/note")(app);
require("./routes/category")(app);

module.exports = app;