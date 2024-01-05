import React from "react";
import { BiDownvote } from "react-icons/bi";
import "flowbite";
import "./translate.css";

function Translate() {
  return (
    
    <div className="background">
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
          
        <button id="translateButton" onclick="translateText()">Translate</button>


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
