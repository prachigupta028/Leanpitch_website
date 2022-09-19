import { width } from '@mui/system'
import React from 'react'

const Topnav = () => {
    const head={
        width:"100%",
        height:"90px",
        backgroundColor: "rgb(40, 34, 34)",
    display: "flex",
    justifyContent: "space-between",
    marginBottom:"-3vh",
    position:"fixed"
    }
    const content={
        display:"flex"
    }
    const logo={
            transform: "scale(1.8)",
            marginTop: "31px",
            marginLeft: "20px",
            width:"40px",
            height:"30px"
        }
        const btns={
            color:"white",
            backgroundColor: "rgb(40, 34, 34)",
            
        }

  return (
        <div style={head}>
         <div style={content} >
           
            <img style={logo}src='https:cdn.discordapp.com/attachments/1000352875844731002/1020592161680531468/productwhite.png'/>
           <h1 style={btns}>Leanpitch</h1>
         </div>
         <div style={content}>
           <h1 style={{backgroundColor:"red",color:"white",marginRight:"5px",marginTop:"20px"}}>Subscribe</h1>
           <h1  style={btns}>Contact Us</h1>
         </div>
     </div>
  )
}

export default Topnav
