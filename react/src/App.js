import logo from './logo.svg';
import './App.css';

import Header from "./component/Header"
import Home from "./component/Home"
import About from './component/About'
import Widget from './component/Widget'
import Project from './component/Project';
import Contact from './component/Contact';
import Experience from './component/Experience';

function App() {
  return (
    <div className="App">
      <Header/>
      <Widget/>
      <Home/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
