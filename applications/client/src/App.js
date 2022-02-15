import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about/About';
import AboutAnthony from './pages/about/AboutAnthony';

/* 1) To create a new page, create a new .js file in the pages folder
 * 2) Next, in this file, import the .js file using its path as shown above
 * 3) If you want to add the page to the navbar, put it in the <ul> part below
 * 4) Finally, add the page to the Routes section beneath the links */

function App() {
  return (
    <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          {/* Add links to the navbar here */}
        </ul>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/about/anthony" element={<AboutAnthony />}/>
      </Routes>
    </Router>
  );
}

export default App;