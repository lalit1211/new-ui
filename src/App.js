import React from 'react';
import './style/App.css';
import Application from './pages/app/index'
import Auth from './pages/auth/index'
import useAuth from "./context/Auth.context";
import { useState } from 'react';


function App() {
  const { token, rol } = useAuth();
  // console.log(rol)

  return <>{token ? <Application /> : <Auth />}</>;


  
}

export default App;
