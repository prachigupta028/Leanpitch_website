import React from 'react'
import Data from './Data';
import Card from './Card';

const index = () => {

  const main={
    border:"5px solid yellow",
    width:"800px",
    Height:"-30px",
    marginLeft:"460px",
    marginTop:"-200vh",
    marginBottom:"40px",
    display:"inline-block"
  }
  return (
    <span>
      <div style={main}>
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

export default index