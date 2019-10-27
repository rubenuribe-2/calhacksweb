import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import DriverCard from './components/DriverCard';
import { directive } from '@babel/types';



function App() {
  return (
    <>
    <div className="driverContainer" style={{display:"flex", height: "100vh",alignItems:"center", overflowX: "scroll", width: "100vw"}}>
          <div className="App">
            <DriverCard name="Ruben1" speed="20" distance="30" time="600"/>
          </div>
          <div className="App">
            <DriverCard name="Ruben2" speed="20" distance="30" time="600"/>
          </div>
          <div className="App">
            <DriverCard name="Ruben3" speed="20" distance="30" time="600"/>
          </div>
          <div className="App">
            <DriverCard name="Ruben4" speed="20" distance="30" time="600"/>
          </div>
          <div className="App">
            <DriverCard name="Ruben5" speed="20" distance="30" time="600"/>
          </div>
          <div className="App">
            <DriverCard name="Ruben6" speed="20" distance="30" time="600"/>
          </div>
          <div style={{zIndex:"-10"}}>.</div>

    </div>
        <script src="https://www.gstatic.com/firebasejs/7.2.2/firebase-app.js"></script>  
        <script src="https://www.gstatic.com/firebasejs/7.2.2/firebase-analytics.js"></script>   
    </>
  );
}

export default App;
