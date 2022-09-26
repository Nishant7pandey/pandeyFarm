import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import Header from './Component/Layout/Header';
import Footer from './Component/Layout/Footer';
import Home from './Component/Pages/Home';
// import About from './Component/Pages/About';
// import Contact from './Component/Pages/Contact';
// import Error from './Component/Layout/Error';
// import Testing from './Component/Pages/Testing';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
