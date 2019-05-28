import React, {useState} from 'react';
import 'normalize.css'

import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';
import {ProtectedRoute} from "./components/ProtectedRoute";

import Header from "./components/Header";
import Login from './Views/Login';
import Configurator from "./Views/Configurator";

import {IntlProvider, addLocaleData} from "react-intl";
import en from 'react-intl/locale-data/en'
import pl from 'react-intl/locale-data/pl'

import translationPl from './translations/pl.json'
import translationEn from './translations/en.json'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    font-family: 'Roboto', sans-serif;
  }
`;

const App: React.FC = () => {
    addLocaleData([...en, ...pl])

    const [language, setLanguage] = useState(navigator.language)
    const messages = { 'pl-PL': translationPl, 'en': translationEn }

    return (
        <IntlProvider key={language} locale={language} messages={messages[language]}>
            <>
                <GlobalStyle/>
                <Header currentLanguage={language} setLanguage={setLanguage} />
                <Router>
                    <Switch>
                        <Route exact path="/" component={Login}/>
                        <ProtectedRoute path="/configurator" component={Configurator}/>

                        <Redirect from='*' to='/'/>
                    </Switch>
                </Router>
            </>
        </IntlProvider>
    )
}

export default App;
