import React from "react";
import "../Button/Button.css"

export const Button = ({txt, type, func }) => {

    return (
        <div>
        
            <button
            type={type}
             className="button"
             onClick={func}
             
            >

                {txt}
            
            </button>

        
        </div>
    );

}