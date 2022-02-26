import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React, { useState } from 'react'
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [greenmode, setGreenMode] = useState('white');
  const showGreenMode = () => {
    if (greenmode === 'white') {
      setGreenMode('green');
      document.body.style.backgroundColor = '#44f284';
    } else {
      setGreenMode('white');
      document.body.style.backgroundColor = 'white';
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const changeMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode is Enabled", "warning");
      document.title = "TextUtils - Dark Mode";
      setInterval(() => {
        document.title = 'ok';
      }, 2000);
      setInterval(() => {
        document.title = 'Bye';
      }, 1500);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} showGreenMode={showGreenMode} changeMode={changeMode} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/">
            <Textarea title="Enter Text" mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;