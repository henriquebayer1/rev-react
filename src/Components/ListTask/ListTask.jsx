import React from "react";
import "../ListTask/ListTask.css"
import IconLapis from '../../Icons/Lapis.svg'
import IconX from '../../Icons/X.svg'
import IconLapisWhite from '../../Icons/LapisWhite.svg'
import IconXWhite from '../../Icons/XWhite.svg'
export const ListTask = ({ id, txtList }) => {

 

    return (
        <>
            <div className="AlignList">
                <div className={`AlignListItems `}>

                    <input className="CheckBox" type="checkbox"/>

                    
                    <p className="Tarefa"
                        
                   
                       >
{txtList}

        </p>

                    <div className="AlignActions">

                        <button className="IconsButton"> <img className="Icons" src={IconLapisWhite} alt="Edicao" /></button>

                        <button className="IconsButton"><img className="Icons" src={IconXWhite} alt="Exclusao" /></button>

                    </div>
                </div>
            </div>


        </>
    );

}