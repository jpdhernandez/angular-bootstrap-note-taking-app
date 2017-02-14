const app = require("./server/routes");

const server = app.listen(8000, () => {
    console.log(`Listening on port ${server.address().port}`);
});