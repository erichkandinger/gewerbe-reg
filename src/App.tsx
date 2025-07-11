import AppHeader from './components/AppHeader';
import {HashRouter as Router, Routes, Route } from "react-router-dom";
import Gewerbe from './components/Gewerbe';
import GewerbeList from './components/GewerbeList';
import Example from './components/Example';
import './App.css';

function App() {
  return (
    <section className="App">
      <Router>
          <AppHeader/>
          <Routes>
            <Route path="/" Component={GewerbeList} />
            <Route path="/gewerbe" Component={Gewerbe} />
            <Route path="/example" Component={Example} />
          </Routes>
      </Router>
    </section>
  )
}

export default App
