import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import { Navigation } from './components/Navigation/Navigation';
import { FormGenerator } from './components/FormGenerator/FormGenerator';

import { SharedApp } from './components/SharedApp/SharedApp'

import es from './lang/es.json'
import en from './lang/en.json'

function App() {

  const [lang, setLang] = useState(es)

  function changeLanguaje() {
    if (lang === es) {
      setLang(en)
    } else if (lang === en) {
      setLang(es)
    }
  }


  return (
    <>
      <Navigation lang={lang} changeLang={changeLanguaje} />
      <FormGenerator lang={lang} />
      <SharedApp lang={lang} />

    </>
  );
}

export default App;
