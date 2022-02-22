import { Header } from './components/Header'
// import { BrowserRouter as Router , Routes, Route, Link} from 'react-router-dom'
import React from 'react'
import { useState } from 'react'
// import {SignUp} from './components/signup'
// import {Login} from './components/Login'
import './App.css';
import './index.css';
import { Crosel } from './components/Crosel';
import { Footer } from './components/Footer';
function App() {
  const [menu,setMenu] = useState(false);
    // <BrowserRouter>
    //     <Routes>
    //       <Route>
    //         <Route />
    //       </Route>   
    //     </Routes> 
    // </BrowserRouter>
    // function closeMenu(e){
    //   let currentState = menu;
    //     if(e.target.id === "menu"){
    //         currentState = (currentState)?false:true;
    //     }
    //     else{
    //       if(currentState)
    //       currentState = false;
    //     }
    //     setMenu(currentState);
    // }
  return (
    <div className='m-0 p-0'>
      <Header />
      <div className="width">
        <Crosel/>
      </div>
      
        {/* <Login /> */}

    {/* <Footer /> */}
  </div>
  )
}

export default App;
