import Header from './components/Header';
import {Routes, Link, HashRouter as Router, Route } from "react-router-dom";
import Gewerbe from './components/Gewerbe';
import GewerbeList from './components/GewerbeList';
import Example from './components/Example';
import './App.css';



function App() {
  return (
    <section className="App">
      <Header/>
      <Router>
          <Link to="/">Liste</Link>&nbsp;
          <Link to="/gewerbe">Gewerbe</Link>&nbsp;
          <Link to="/example">Example</Link>
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
