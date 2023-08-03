
import { Routes, Route } from 'react-router-dom';
import './App.css';
 
 
import Home from './Home';
import Registration from './Registration';
 
import LoginPage from './LoginPage';
import BrowserJobs from './BrowserJobs';
import Jobs from './Jobs';

function App() {
  return (
    <div className="App">
     
      
      <Routes>
       

        {/* <Route exact path='/' element={<Home />} />
        <Route exact path='/About' element={<About />} />
        <Route exact path='/Contact' element={<Contact />} /> */}
        <Route exact path='/' element={<Registration />} />
        <Route exact path='/BrowserJobs' element={<BrowserJobs />} />
        <Route exact path='/Jobs' element={<Jobs />} />
        <Route exact path='/Home' element={<Home />} />
        
        <Route exact path='/LoginPage' element={<LoginPage />} />


      </Routes>
      



    </div>
  );
}

export default App;
