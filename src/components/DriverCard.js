import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'


export default class DriverCard extends Component{
  constructor(props){
    super(props);
    this.onClick=this.onClick.bind(this);
    this.state={
      speed:this.props.speed,
      distance:this.props.distance,
      time:this.props.time
    }
  }
  onClick(){
    //handle the click event
    console.log(this.props.name);
    this.setState({speed:0,distance:0,time:0})
    //post to the api set the data to zero
  }
  
  render(){
    return(
      <div className="Driver">
        <h1>{this.props.name}</h1>
        <br></br>
        <h3>average speed: {this.state.speed} mph</h3>
        <h3>distance travled: {this.state.distance} miles</h3>
        <h3>Time driving: {this.state.time} minutes</h3>
        <br></br>
        <Button onClick={this.onClick} id={this.props.name} variant="dark" size="lg" style={{minWidth:"30%"}}>Reset</Button>
      </div>
    );
  }
}





/*
function DriverCard(props) {

  
    return (
      <div className="Driver">
        <h1>{props.name}</h1>
        <br></br>
        <h3>average speed: {props.speed} mph</h3>
        <h3>distance travled: {props.distance} miles</h3>
        <h3>Time driving: {props.time} minutes</h3>
        <br></br>
        <Button onClick={{onClick}} variant="dark" size="lg" style={{minWidth:"30%"}}>Reset</Button>
      </div>
    );
  }
  
  export default DriverCard;*/

