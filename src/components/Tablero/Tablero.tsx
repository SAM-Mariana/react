import React from "react";
import './Tablero.css';
import CustomButton from "../CustomButton/CustomButton";

function Tablero(){
    return(
        <>
        <div className="filaTTC">
            <CustomButton posicion={1}></CustomButton>
            <CustomButton posicion={2}></CustomButton>
            <CustomButton posicion={3}></CustomButton>
        </div>
        <div className="filaTTC">
            <CustomButton posicion={4}></CustomButton>
            <CustomButton posicion={5}></CustomButton>
            <CustomButton posicion={6}></CustomButton>
        </div>
        <div className="filaTTC">
            <CustomButton posicion={7}></CustomButton>
            <CustomButton posicion={8}></CustomButton>
            <CustomButton posicion={9}></CustomButton>
        </div>
        </>
    )
}
export default Tablero;