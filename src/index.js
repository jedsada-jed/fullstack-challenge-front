import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import './index.css';
import App from './App';
import AuthExample from './TestRoute'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';
import history from './navigation/history'
import ContextProvider from './providers/ContextProvider';
import theme from './config/theme';

ReactDOM.render(
  <ContextProvider>
     <ThemeProvider theme={theme}>
     <Router history={history}>
      <App />
    </Router>
    <CssBaseline />
  </ThemeProvider>,
   
  </ContextProvider>,
  document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
