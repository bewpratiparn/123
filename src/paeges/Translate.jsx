import React, { useState } from "react";
import { Form, TextArea, Button, Icon } from "semantic-ui-react";
import "./translate.css";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import Navbar from "../components/Navbar";

function Translate() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const submitTranslate = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/translate/",
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
              value={inputText}
              onChange={handleInputChange}
            />

            <Form.Select
              placeholder="Please Select Language.."
              options={languageOptions}
              className="language-select"
            />

            <Form.TextArea
              placeholder="Your Result Translation.."
              value={translatedText}
              readOnly
            />

            <Button color="orange" size="large" type="submit">
              Translate
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Translate;
