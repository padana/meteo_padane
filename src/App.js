import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Temp from './components/Temp';
import Form from './components/Form';
require('dotenv').config()



const API_KEY =  process.env.REACT_APP_meteo_API_KEY;
//const BASE = "https://api.openweathermap.org/data/2.5/weather?q=new york,usa&appid="
export default class App extends Component {
  constructor(props) {
     super(props);

     this.state={
       city: ' ',
       country: ' ',
       celsuis: 0,
       min: 0,
       max: 0,
       description: ' ',
       date: new Date(),
       error: false
     }

     this.handlSubmit = this.handlSubmit.bind(this)
  }

  Celsuis=(cell)=>{
    let temperature = Math.floor(cell - 273.15)
    return temperature
  }


  handlSubmit(e){
    e.preventDefault()
    const city2 = e.target.elements.city.value
    const country2 = e.target.elements.country.value
    
    if(city2 && country2){
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city2},${country2}&appid=${API_KEY}`)
    .then(res =>{
     // console.log(res);
        this.setState({city:    `${res.data.name}, ${ res.data.sys.country}`})
        this.setState({celsuis: this.Celsuis(res.data.main.temp)})
        this.setState({min:     this.Celsuis(res.data.main.temp_min)})
        this.setState({max:     this.Celsuis(res.data.main.temp_max)})
        this.setState({description: res.data.weather[0].description})
    })

    } else{
      this.setState({error: true})
    }
    
  }




  render() {
 
    return (
      <div className ='container'>
        <Form
          onSubmit ={this.handlSubmit}
          error={this.state.error}
         />
        
        <Temp  city ={this.state.city}
               celsuis ={this.state.celsuis}
               min ={this.state.min}
               max={this.state.max}
               description={this.state.description}
               date = {this.state.date}
        />
      </div>
    )
  }
}

