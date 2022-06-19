import React, { Fragment, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login"
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Checkout from "./Checkout";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      console.log("The user is >>> ", authUser);

      if(authUser)
      {
        dispatch({
          type:"SET_USER",
          user:authUser,
        })
      }
      else{
        dispatch({
          type:"SET_USER",
          user:null,
        })
      }
    })
    
  }, [])
  return (
    <div className="App">
    <Router>
      <Routes>
    
          <Route path='/checkout' element={
          <Fragment>
            <Header/>
            <Checkout/>
          </Fragment>}/>
        <Route path="/" element={
          <Fragment>
            <Header/>
            <Home/>
          </Fragment>
        }/>        
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
