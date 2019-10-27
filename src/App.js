import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import app from 'firebase/app';
import firebase from 'firebase';
import DriverCard from './components/DriverCard';
import { directive } from '@babel/types';





export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
      people:[]
    }
  }
  
  componentDidMount(){
    var data;    
    axios.get("https://calhackssix.firebaseio.com/.json")
    .then(res=>{
      data=res.data;
      console.log(data);
      let newPeople=[];
      let keys=Object.keys(data);
      for (let i=0; i<keys.length; i++){
        let newObj = {};
        newObj["name"]=keys[i];
        newObj["speed"]=data[keys[i]]["data2"]["currentSpeed"];
        newObj["distance"]=data[keys[i]]["data2"]["distanceDriven"];
        newObj["time"]=data[keys[i]]["data2"]["timeMoving"];
        newPeople.push(newObj);
      }
      this.setState({people: newPeople});

    });  
  }
  render(){
    return (
        <>
        <div>
          <h1></h1>
        </div>
        <div className="driverContainer" style={{display:"flex", height: "100vh",alignItems:"center", overflowX: "scroll", width: "100vw"}}>
              {
                this.state.people.map((obj) => {
                  return <DriverCard name={obj.name} speed={obj.speed} distance={obj.distance} time={obj.time}/>
                })
              }

              <div style={{zIndex:"-10"}}>.</div>

        </div>  
        </>
      );
    }
  }

  // Your web app's Firebase configuration
  // var firebaseConfig = {
  //   apiKey: "AIzaSyALinEZTQIewu1jIDoW6hM6Dgcj47uRn5k",
  //   authDomain: "calhackssix.firebaseapp.com",
  //   databaseURL: "https://calhackssix.firebaseio.com",
  //   projectId: "calhackssix",
  //   storageBucket: "calhackssix.appspot.com",
  //   messagingSenderId: "966064755351",
  //   appId: "1:966064755351:web:8538ca95dc707152d68fd2",
  //   measurementId: "G-S4FJJP5FW6"
  // };
  // app.initializeApp(firebaseConfig);
   
  
  //  var people = app.database.ref('calhackssix');
  // console.log(people);
  // const ref= firebase.database(app).ref('calhackssix');
  // console.log(ref);
  // console.log(firebase.database(app).ref(''));

  
  // console.log(driverArray);
  // driverArray.forEach(function (driver){
  //   console.log(driver);
  // })