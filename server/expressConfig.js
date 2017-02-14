const bodyParser = require("body-parser");

module.exports = function(app, express) {
    app.use("/", express.static("app/"));

    // Set the view directory, this enables us to use the .render method inside routes
    app.set("views", `${__dirname}/../app/views`);

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));

    // parse application/json
    app.use(bodyParser.json());
}