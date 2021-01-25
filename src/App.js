import React  , {useEffect} from 'react';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router} from 'react-router-dom';
import Blog from './components/Blog';
import Aos from 'aos';
import 'aos/dist/aos.css';


function App() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
}, []);   


  return (
    <div className="App">

      <Router>
        <Nav />
        <Home />
        <About />
        <Blog />
        <Contact />

        
      </Router>

    </div>
  );
}

export default App;
