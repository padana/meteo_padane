import React from 'react'
import Image from '../assets/skuawk.jpg'

export default function Temp(props) {
    const {city, celsuis, min, max, description, date} = props
    return (
         
        <div 
          style={{backgroundImage:  "url(" + Image + ")", 
          backgroundRepeat: 'no-repeat', 
          backgroundPosition: 'center', backgroundSize:'cover'}} 
          className ='d-flex justify-content-center card text-white card text-center mt-5'
          
        >
          <div className="card-body">
            <h5  className="card-title border border-warning rounded-circle w-25 bg-white text-dark m-auto">{city}</h5>
            <h4 className="card-title bg-dark test-white mt-4">{(date).toLocaleDateString()}</h4><br/>
            <i className='ml-3 fas fa-temperature-high card-text' style={{fontSize:'36px'}}></i><br/>
             {celsuis? CELSUIS() : null}
             {(min, max) ? Tmp(): null}
           
             {description ? Description() : null}
           </div>
        </div>
    )

    function CELSUIS(){
     return(
        <h3 className="mt-2 btn btn-danger">{celsuis} C°</h3>
     )
    }

    function Tmp(){
      return(
        <h3 className="card-text p-2">
        <span className ='mr-3 badge badge-info'>{min} C° </span>  
        <span className ='badge badge-warning'>{max} C°</span>
       </h3>
      )
    }

    function Description(){
      return(
        <h2 className ='text-white'>{description}</h2>
      )
    }
}
