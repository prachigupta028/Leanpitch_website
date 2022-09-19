import React from 'react'
import Data from './Data';
import Card from './Card';
import './trains.css'

const Trained = () => {

  
  return (
    <span className='pop'>
      <div >
      <h1>Our Trainings</h1>
        {Data.map((element)=>{
       return(
        <div style={{display:"flex",float:"right"}}>
        <Card 
          key={element.id}
          title={element.title}
          sub={element.sub}
          img={element.img}
          content={element.content}
          Date={element.Date}
          Links={element.Links}
        />
        </div>
       )
        })
        }
      </div>
     
    </span>
  )
}

export default Trained