import React, { useState } from "react";
import "../ModalNewTask/ModalNewTask"
import { Button } from "../Button/Button";
import '../ModalNewTask/ModalNewTask.css'

export const ModalNewTask = ({ txt, funcV, subimit}) => {

    const [tarefa, setTarefa] = useState("");

 
    return (
        <div>
        <h1>Descreva sua tarefa</h1>
        <form >
            <input onChange={(e) => {
                setTarefa(
                  
                e.target.value.trim(),
                
                );
               
              }} className="Input" 
              type="text"
              value={tarefa}
              
              />
        <h1>{tarefa}</h1>
        <button className="button"
       onClick={() => funcV(tarefa)}
   
        >Confirmar Tarefa</button>
        </form>
        
        </div>
    );

}