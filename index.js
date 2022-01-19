const app = require("express")();
const dotenv = require("dotenv");
const PORT = 8000;

dotenv.config();
// const WebSocket = require("./socket");
const WebSocket = require("./io");


app.get("/", (req, res) => { 
    console.log(__dirname);
    // console.log(req);
    res.sendFile(__dirname + '/view/index.html');
})

const server = app.listen(PORT, () => { 
    console.log("listening");
})

WebSocket(server);