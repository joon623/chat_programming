const WebSocket = require('ws');

module.exports = (server) =>{ 
    const wss = new WebSocket.Server({server});

    wss.on("connection", (ws, req) => { 
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.log("새로운 클라이언트 접속 ", ip);
        console.log(ws);

        ws.on("error" , (error) => { 
            console.log(error);
        })
    
        ws.on("close", ()=> { 
            console.log("접속 해제 ")
            
        })
    
        setInterval(() => { 
            // if문은 일종의 방어막이다. 
            if(ws.readyState === ws.OPEN) {
                ws.send("server에서 message 보내기 ");
            }
        }, 3000)
    })


}