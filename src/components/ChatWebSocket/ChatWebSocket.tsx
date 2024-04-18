import React from "react";
import {FiSend} from "react-icons/fi";
import { useState, useEffect } from "react";
import { text } from "stream/consumers";
function ChatWebSocket(){
    const[mensaje, serMensaje] = useState('');
    const[mensajes, setMensajes] = 
                                    useState < String[]>([]);
    const[socket, setSocket]= 
                useState<WebSocket | null>(null); 
    useEffect(()=>{
        const newSocket = 
        new WebSocket ('ws://localhost:8085');
        newSocket.onmessage = (event) => {
            event.data.text().then((text:string)=>{
                console.log(text);
                setMensajes(
                    (prevMensajes)=>
                    [...prevMensajes, text]
                );
            });
        };
        newSocket.onclose = () =>{
            console.log('desconectado');
        };
        setSocket(newSocket);
        return ()=>{
            newSocket.close();
        }
    },[]);
    const mandarMensaje = () => {
        if(socket && mensaje.trim()){
            setMensajes((anterioresM)=>[
                ...anterioresM,mensaje
            ]);
            socket.send(mensaje);
            serMensaje('');
        }
    };
    return(
        < div className="chat">
            <div className="chat-heder">
                Titulo
            </div>
            <div className="chat-menssage">
                {mensajes.map((mensajeInterno, index)=>(
                    <div key={index}>{mensajeInterno}</div>
                ))}
            </div>
            <div className="chat-sender">
                <input className="chat-sent"
                value={mensaje}
                onChange={(evento)=>{
                    serMensaje(evento.target.value)
                }}
                onKeyDown={(evento)=>{
                   if(evento.key == 'Enter'){ 
                }
            }}
                ></input>
                <FiSend/>
            </div>
        </div>
    );
}
export default ChatWebSocket