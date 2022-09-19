
import React from 'react'
import './style.css'

const Card = (props) => {
    //  const cards={
    //     border:"2px solid yellow",
    //  }
    const cardhead={
        display:"flex",
        float:"right",
        marginBottom:"20px"

    }
    const cardmain={
        width:"210px",
        height:"250px",
        backgroundColor:"#336699",
        marginRight:"40px",
        borderRadius:"20px",
        color:"white",
        textAlign:"center",
        marginTop:"5px"
        // padding:"20px"
     }
    
     const image={
        width:'60px',
        height:"60px",
        marginLeft:"-120px",
        // marginBottom:"-10px",
        marginTop:"2px",
        padding:"5px"
     }
     const subject={
        backgroundColor:"#29465B"
     }

  return (
    <div >
    <div style={cardhead}>
    <div style={cardmain}>
    <img src={props.img} style={image}/>
    <h3 style={{marginTop:"-2vh"}}>{props.title}</h3>
    <div style={subject}>
    <p>{props.sub}</p>
    <h3 style={{marginTop:"-12px"
     }}>{props.Date}</h3>
    </div>
    <a href={props.Links}><button  className="effect">{props.content}</button></a>
</div>
    </div>
    </div>
  )
}

export default Card