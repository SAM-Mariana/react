//es un 
const { Console } = require('console');
const webSocket = require('ws');
const wss = new
            webSocket.Server({port:8042});
            wss.on('connection', (ws)=>{
                console.log('un usuario nuevo!');
                ws.on('message', (data)=>{
                    console.log(data);
                    wss.clients.forEach((cliente)=>{
                        if(cliente != ws && cliente.readyState === webSocket.OPEN){
                            cliente.send(data);
                        }
                    });
                });
                ws.on('close', ()=>{
                    console.log('el usuario se ha desconectado');
                });
            });
            Console.log('Ws prendido: \n');