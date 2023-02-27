
const http = require("http");
const express = require("express");
const path = require("path");
const port = process.env.PORT || 4000;
const pdp = path.join(__dirname,"./build");
const app = express();
app.use(express.static(pdp));
const server = http.createServer(app);
server.listen(port,()=> {
    console.log(`server is up on port ${port}!`);
})
