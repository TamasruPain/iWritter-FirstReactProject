// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Alert from './components/Alert';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"


function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
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

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark mode has been enabled!", "success");
      document.title = 'IWritter - Dark Mode';

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!", "success");
      document.title = 'IWritter - Light Mode';
    }
  }

  return (
    <>
      <Router>
        {/* <Navbar title="IWritter" about="About IW"/> */}
        <Navbar title="IWritter" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container'>
          <Routes>

            <Route exact path="/" element={<Home mode={mode}/>} >
            </Route>

            <Route exact path="/about" element={<About mode={mode}/>} >
            </Route>

            <Route exact path="/textform" element={<TextFrom heading="Let's Edit Some Text" showAlert={showAlert} mode={mode} heading2="Enter the Text Below" />}>
            </Route>

          </Routes>
        </div>

      </Router>
    </>

  );
}

export default App;