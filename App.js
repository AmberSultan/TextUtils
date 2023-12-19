
import './App.css';

import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useState } from 'react'; //import useState 

function App() {
  
  const [mode, setMode] = useState('light'); //declare use state variable
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) =>{
    setAlert({msg: msg, type:type})
  
    //declaring function to automatically disappear the alert message
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2e6089';
      //showAlert("Dark Mode has been Enabled " , "success");   --->uncomment this if you war to show alert while changing modes
      document.title = 'TextUtils - Dark Mode' //change the title of page when there is a dark mode
    }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    //showAlert("Light Mode has been Enabled " , "success");     --->uncomment this if you war to show alert while changing modes
    document.title = 'TextUtils - Light Mode'
  }
}

  return (
  <>
  
      <Router>

            <Navbar title="TextUtils"  about="AboutUs"  mode={mode} toggleMode={toggleMode}/>
            <Alert alert ={alert}/>

            <div className="container my-2">
              <Routes>
                <Route path="/about" element={<About mode={mode}/>}/>
                <Route path="/about" element={<TextForm  showAlert={showAlert} heading="Enter your TEXT below" mode={mode}/>}/>
              </Routes>
          </div>

      </Router>
  </>
  );
  }

export default App;
