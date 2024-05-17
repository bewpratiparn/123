import React, { useState } from "react";
import { Form, TextArea, Button } from "semantic-ui-react";
import "./translate.css";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import Navbar from "../components/Navbar";

function Translate() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const submitTranslate = async () => {
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
    <div>
      <div className="app-header">
        <h2 className="header"> Translator</h2>
      </div>

      <div className="app-body">
        <div>
          <Form onSubmit={submitTranslate}>
            <Form.TextArea
              label="About"
              placeholder="Type Text to Translate.."
              className="inputtext"
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
                  Please Select Language...
                </option>
                {languageOptions.map((option) => (
                  <option key={option.key} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
            </div>

            <Form.TextArea
              placeholder="Your Result Translation.."
              className="result"
              value={translatedText}
              readOnly
            />

            <Button
              className="translatebutton"
              color="orange"
              size="large"
              type="submit"
            >
              Translate
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Translate;
