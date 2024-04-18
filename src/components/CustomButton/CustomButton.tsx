import React from "react";
import { useState } from "react";
import './CustomButton.css';
import { strict } from "assert";
import { log } from "console";
import { ResourceLimits } from "worker_threads";

interface Valores{
    texto:String
}
 
function CustomButton({posicion}:any){
    const [contador, setContador] = useState(0);
    const sumar = () =>{
        setContador(variable=> {
            return variable+1;
        });
    };
    const reactContador = () =>{
        setContador(variable=>{
            return variable +1;
        });
    };

    const [movimientos, setMovimientos] = useState([]);
    const [EstadoGato, setEstadoGato] = useState('-');
    const functiones = (posicion:number)=>{
        changeStatus();
        let word = changeStatus();
        console.log(word)
        moviment(posicion, word);
    }

    const moviment = (posicion:number, word:void)=>{
        console.log(word)
    }

    const changeStatus = ()=>{
        var resul;
        setEstadoGato(estado=>{
            if(estado == ' '){
                estado = 'x';
                return estado;
            }
            if(estado == 'x'){
                estado = 'o';
                return estado;
            }
            if(estado == 'o'){
                estado = ' ';
                return estado;
            }else{
                return estado;
            }
        });
    };
    return (
    <>
        <div onClick={() => {functiones(posicion)}} className="mibotoncont">
                <div className="miboton">
                    <button className="btng">{EstadoGato}</button>
                </div>
        </div>
    
     </>   
    );
}
export default CustomButton;