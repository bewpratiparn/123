import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import "./translate.css";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";

function Translate() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const submitTranslate = async (e) => {
    e.preventDefault();
    try {
      const translationDirection =
        selectedLanguage === "en" ? "th-en" : "en-th";

      const response = await axios.post(
        `http://127.0.0.1:8000/translate/${translationDirection}/`,
        {
          text: inputText,
        }
      );

      setTranslatedText(response.data.translated_text);
    } catch (error) {
      console.error("Error translating:", error);
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const languageOptions = [
    { key: "en", text: "English", value: "en" },
    { key: "th", text: "Thai", value: "th" },
  ];

  return (
    <>
      <div className="app-body">
        <div className="form-control-Translate">
        
          <form onSubmit={submitTranslate}>
          <div className="header"> Translator</div>
           
            <textarea
              id="inputText"
              placeholder="Type Text to Translate.."
              className="inputtext custom-textarea"
              value={inputText}
              onChange={handleInputChange}
            />
            <div className="long-select-language">
              <select
                className="language-select"
                onChange={handleLanguageChange}
                value={selectedLanguage}
              >
                <option value="" disabled>
                  เลือกภาษาที่ต้องการจะเเปล
                </option>
                {languageOptions.map((option) => (
                  <option key={option.key} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
            </div>

            <textarea
              placeholder="Your Result Translation.."
              className="result"
              value={translatedText}
              readOnly
            />
            <Button
              className="translate-button"
              color="orange"
              size="large"
              type="submit"
            >
              Translate
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Translate;
