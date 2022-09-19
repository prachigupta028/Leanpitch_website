import React from 'react'

const index = () => {
    const main={
        border:"5px solid yellow",
        width:"800px",
        marginLeft:"460px",
        paddingBottom:"200px",
        marginTop:"-80vh",
        marginBottom:"40px",
        // /
        
      }
      const image={
         width:"250px",
         height:"200px",
         borderRadius:"10px",
          marginLeft:"10px"
      }

  return (
    <div style={main}>
    <h1 style={{textAlign:"center"}}>VIDEOS</h1>
    <img  style={image}src="https://s3.ap-south-1.amazonaws.com/townscript-production/images/ST1607517370297STENDe5fb87eb-dd77-4b8c-b470-3b596c4104ed.jpg"/>
   <img style={image }src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuV2uSi-lLZYl3JSVJnRIlRZBlvmdTXx-wAQ&usqp=CAU"/>
   <img style={image}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY05uiEfyZXKOTjm7puIHcpdjBwApj8DZaGw&usqp=CAU"/>
    </div>
  )
}

export default index