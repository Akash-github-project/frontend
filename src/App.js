import { Header } from './components/Header'
// import { BrowserRouter as Router , Routes, Route, Link} from 'react-router-dom'
import React from 'react'
import {SignUp} from './components/signup'
import {Login} from './components/Login'
// import './css/skeleton.css'
import './App.css';
import './index.css';
function App() {
    // <BrowserRouter>
    //     <Routes>
    //       <Route>
    //         <Route />
    //       </Route>   
    //     </Routes> 
    // </BrowserRouter>
  return (
    <div className='container w-full max-w-screen-[1170px] mx-auto'>
      <Header />
      <div>
        <Login />
      </div>
    </div>
  )
}

export default App;
