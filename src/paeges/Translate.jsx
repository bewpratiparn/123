import React, { useState } from "react";
import { Form, Button, Dropdown } from "semantic-ui-react";
import axios from "axios";
import "./translate.css";
import "semantic-ui-css/semantic.min.css";

function Translate() {
  const [state, setState] = useState({
    inputText: "",
    translatedText: "",
    selectedLanguage: "",
    error: "",
  });

  const submitTranslate = async () => {
    try {
      const translationDirection =
        state.selectedLanguage === "en" ? "th-en" : "en-th";

      const response = await axios.post(
        `http://127.0.0.1:8000/translate/${translationDirection}/`,
        { text: state.inputText }
      );

      setState({ ...state, translatedText: response.data.translated_text, error: "" });
    } catch (error) {
      console.error("Error translating:", error);
      setState({ ...state, error: "Error translating. Please try again." });
    }
  };

  const handleInputChange = (e) => {
    setState({ ...state, inputText: e.target.value });
  };

  const handleLanguageChange = (e, { value }) => {
    setState({ ...state, selectedLanguage: value });
  };

  const languageOptions = [
    { key: "en", text: "English", value: "en" },
    { key: "th", text: "Thai", value: "th" },
  ];

  return (
    <div>
      <div className="app-header">
        <h2 className="header">Translator</h2>
      </div>
      <div className="app-body">
        <Form onSubmit={submitTranslate}>
          <Form.TextArea
            label="Text to Translate"
            placeholder="Type text to translate..."
            className="inputtext"
            value={state.inputText}
            onChange={handleInputChange}
          />
          <Form.Select
            placeholder="Please Select Language..."
            options={languageOptions}
            className="language-select"
            onChange={handleLanguageChange}
            value={state.selectedLanguage}
          />
          <Form.TextArea
            placeholder="Your translation will appear here..."
            className="result"
            value={state.translatedText}
            readOnly
          />
          {state.error && <div className="error">{state.error}</div>}
          <Button className="translatebutton" color="orange" size="large" type="submit">
            Translate
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Translate;
