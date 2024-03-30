import React, { useState, useEffect } from "react";
import { Form, TextArea, Button, Icon } from "semantic-ui-react";
import "./translate.css";
import axios from "axios";
import 'semantic-ui-css/semantic.min.css'
import Navbar from "../components/Navbar";
function Translate() {
  const [inputText, setInputText] = useState('');
  const [detectLanguageKey, setdetectedLanguageKey] = useState('');
  const [selectedLanguageKey, setLanguageKey] = useState('');
  const [languagesList, setLanguagesList] = useState([]);
  const [resultText, setResultText] = useState('');
  const [apiKey, setApiKey] = useState('');

  const languageOptions = [
      {key: 'en', Text: 'English', value:'male'},
      {key: 'hi ', Text: 'Hindi', value:'female'},
      {key: 'ar', Text: 'Arabic', value:'other'},
      {key: 'fr', Text: 'French', value:'other'},
      {key: 'es', Text: 'Spanish', value:'other'},
      {key: 'bg', Text: 'Bangla', value:'other'},
      {key: 'ur', Text: 'Arabic', value:'other'},
      {key: 'gr', Text: 'Greek', value:'other'},

  ]

  const getLanguageSource = () => {
    axios
      .post(`https://libretranslate.com/translate`, {
        q: inputText,
      })
      .then((response) => {
        setdetectedLanguageKey(response.data[0].language);
      })
  }
  
  useEffect(() => {
    axios
      .get("https://libretranslate.de/languages")
      .then((response) => {
      setLanguagesList(response.data)
    })

    getLanguageSource();
  }, [inputText])

  
  const languageKey = (selectedLanguage) => {
    setLanguageKey(selectedLanguage.target.value)
  }
  const translateText = () => {
    getLanguageSource();

    let data = {
      q: inputText,
      source: detectLanguageKey,
      target: selectedLanguageKey,
    }
    axios
    .post(`https://libretranslate.de/translate`, data)
    .then((response) => {
      setResultText(response.data.translatedText)
    })
  }

  return (
   <>
   <header>
    <Navbar/>
   </header>
    <div>
      <div className="app-header">
        <h2 className="header"> Translator</h2>
      </div>


      <div className="app-body">
        <div>
          <Form>
            <Form.Field
              control={TextArea}
              label='About'
              placeholder="Type Text to Translate.."
              onChange={(e) => setInputText(e.target.value)}
            />

            <select className="language-select" onChange={languageKey}>
              <option>Please Select Language..</option>
              {languageOptions.map((language) => {
                return( 
                <option value={language.code}>
                  {language.Text}
                  </option>
                )
              })}
            </select>

            <Form.Field
              control={TextArea}
              placeholder="Your Result Translation.."
              value={resultText}
            />

            <Button 
            color="orange" 
            size="large" 
            onClick={translateText}

            >
           <Icon name="translate" />
              Translate
            </Button>
          </Form>
        </div>
      </div>
    </div>
    </>
  );
}
export default Translate;
