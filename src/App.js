import  { React,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Routes , Route , Link ,NavLink} from 'react-router-dom';

import Home from './Home'
import About from './About'
import Contacte from './Contacte'
import Navb from './Navb'

const App = () => {

  const [count,setCount]=useState(0);




  return (
    <div>App
      {count}
      <button onClick={()=>setCount(count+1)}>+</button>
      



      <BrowserRouter>
      <Navb />
    
      <Link to="/">home</Link>
      <Link to="/About">about</Link>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contacte" element={<Contacte/>}/>
      </Routes>
      </BrowserRouter>
      

      
      
      
    
    </div>
  )
}

export default App