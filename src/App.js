
import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Registration from './Registration';
import Recruiters from './Recruiters';
import LoginPage from './LoginPage';

function App() {
  return (
    <div className="App">
      
      <Routes>
       

        {/* <Route exact path='/' element={<Home />} />
        <Route exact path='/About' element={<About />} />
        <Route exact path='/Contact' element={<Contact />} /> */}
        <Route exact path='/' element={<Registration />} />
        <Route exact path='/Home' element={<Home />} />
        <Route exact path='/Recruiters' element={<Recruiters />} />
        <Route exact path='/LoginPage' element={<LoginPage />} />


      </Routes>
      



    </div>
  );
}

export default App;
