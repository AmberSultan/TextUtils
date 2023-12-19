import './App.css';

import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //import react router DOM

import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({ msg: msg, type: type });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#2e6089';
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils-Home" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-2">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />  {/*its always a good practice to use exact with path because after using exact word react do exact matching of your path but if you not use word exact your code also run and go to proper path but REACT DO PARTIAL MATCHING , so using exact word is recommended*/ }
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your TEXT below" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
