import { useState } from "react";
import React from "react";
import { BiDownvote } from "react-icons/bi";
import "flowbite";
import "./translate.css";

function Translate() {
  /**function เพิ่มตัวเลขเฉยๆ ทดลองเขียน logic */
  const [counter, setCounter] = useState(0);

  const updateCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="background">
      <div className="Header">Welcome to Translate</div>
      <center>
        <div className="color-Translate">
          <div className="color-language">
            <div className="language">
              <button>
                <h1>EN</h1>
              </button>
              <button>
                <h1>TH</h1>
              </button>
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
          <div>
            {" "}
            counter = {counter}
            <div className="outline-button-translate">
              <button className="button-trn" onClick={updateCounter}>
                <h1>Translate</h1>
              </button>
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
