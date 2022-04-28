import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about/About';
import AboutJocelyn from './pages/about/AboutJocelyn';
import AboutEdel from './pages/about/AboutEdel';
import AboutAnthony from './pages/about/AboutAnthony';
import AboutMiroslav from './pages/about/AboutMiroslav';
import AboutHira from './pages/about/AboutHira';
import AboutAnsel from './pages/about/AboutAnsel';
import SignIn from "./components/login/login";
import Register from "./components/Register/register";
import ParentRegister from "./components/Register/ParentRegister";
import ProviderRegister from "./components/Register/ProviderRegister";
import Profile from "./components/profile/profile.js";
import ChildProfile from "./components/profile/childprofile.js";
import ViewPosts from"./components/posts/viewPosts";
import Navbar from './components/Navbar';


/* 1) To create a new page, create a new .js file in the pages folder
 * 2) Next, in this file, import the .js file using its path as shown above
 * 3) If you want to add the page to the navbar, put it in the <ul> part below
 * 4) Finally, add the page to the Routes section beneath the links */

function App() {
  const [data, setData] = React.useState(null);

  // Used for testing if React is able to connect with Express
  React.useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }, []);
  
  // Used for testing if React is able to connect with Express
  // This goes in return().
  // <p>{!data ? "setData not yet set" : data}</p>

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Add a route to a page here */}
        <Route path='/'  element={< Home/> } />
        <Route path ="/login" element ={<SignIn />} />
        <Route path="/profile" element={ <Profile />} />
        <Route path ="/register" element={<Register />}/>
        <Route path="/childprofile" element={<ChildProfile />}/>
        <Route path="/viewPosts" element={<ViewPosts />}/>
        {/* <Route path="/" element={<Home />}/>
 
        
        <Route path ="/ParentRegister" element={<ParentRegister />}/>
        <Route path ="/ProviderRegister" element={<ProviderRegister />}/>

        <Route path="/childprofile" element={<ChildProfile />}/>
        <Route path="/viewPosts" element={<ViewPosts />}/>

*/}
        <Route path="/about" element={<About />}/>
        <Route path="/about/jocelyn" element={<AboutJocelyn />}/>
        <Route path="/about/edel" element={<AboutEdel />}/>
        <Route path="/about/anthony" element={<AboutAnthony />}/>
        <Route path="/about/miroslav" element={<AboutMiroslav />}/>
        <Route path="/about/hira" element={<AboutHira />}/>
        <Route path="/about/ansel" element={<AboutAnsel />}/>
        <Route path="/register/signUp" element={<Home/>}/> 
      </Routes>
    </Router>
  );
}

export default App;