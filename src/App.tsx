import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import {HashRouter as Router, Routes, Route } from "react-router-dom";
import ABCRegister from './components/ABCRegister';
import Gewerberegister from './components/Gewerberegister';
import XYZRegister from './components/XYZRegister';
import './App.css';

function App() {
  return (
    <section className="App">
      <Router>
          <AppHeader/>
          <Routes>
            <Route path="/" Component={Gewerberegister} />
            <Route path="/abc" Component={ABCRegister} />
            <Route path="/xyz" Component={XYZRegister} />
          </Routes>
          <AppFooter />
      </Router>
    </section>
  )
}

export default App
