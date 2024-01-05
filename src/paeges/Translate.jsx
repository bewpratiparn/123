import React from "react";
import "flowbite";
import "./translate.css";

function Translate() {
  return (
    
    <div>
      <div className="Header">
        Welcome to Translate
      </div>
      <center>
        <div className="color-Translate">

          <div className="color-language">
          <div className ="language">
               <button><h1>EN</h1></button> 
               <button><h1>TH</h1></button>
            </div>
            </div>                
        <div className="box-InputTranslate">
          <div className="Input-language">
            <label for="textInput">Enter languange :</label>
            <input
              type="text"
              id="textInput"
              name="textInput"
              placeholder="Type here..."
            />
          </div>
        </div>
        <div className="box-OutputTranslate">
        <div className="Input-language">
            <label for="textOutput">Output languange :</label>
            <input
              type="text"
              id="textOutput"
              name="textOutput"
              placeholder=""
            />
          </div>
        </div>
        </div>
      </center>
    </div>
  );
}

export default Translate;
