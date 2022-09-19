import React from 'react'

const Video = () => {
    const main={
        backgroundColor:"white"
      }
      const header={
        textAlign:"center",
        fontSize:"60px",
        padding:"10px"
      }
      const image={
         width:"250px",
         height:"200px",
         borderRadius:"10px",
          marginLeft:"10px"
      }

  return (
    <div style={main}>
    <h1 style={header}>VIDEOS</h1>
    <div style={{display:"flex",justifyContent:"space-evenly"}}>

    <a href="https://www.youtube.com/channel/UCey8O_fB117PnkFuyLlffcA">
         <img  style={image}src="https://s3.ap-south-1.amazonaws.com/townscript-production/images/ST1607517370297STENDe5fb87eb-dd77-4b8c-b470-3b596c4104ed.jpg"/></a>
   <a href="https://www.youtube.com/watch?v=aeNruMCoDDo">
        <img style={image }src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuV2uSi-lLZYl3JSVJnRIlRZBlvmdTXx-wAQ&usqp=CAU"/></a>
   <a href='https://www.youtube.com/watch?v=l7F2OErVxEY'>
        <img style={image}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY05uiEfyZXKOTjm7puIHcpdjBwApj8DZaGw&usqp=CAU"/></a>
   </div>
   <button style={{width:"1512px",backgroundColor:"darkgrey",border:"none"}}></button>
   <h1 style={header}>PM Speak Series</h1>
   <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"20px"}}>
        <img  style={image}src="https://i.vimeocdn.com/video/801225227-e5d302662feaf7971069bebab7e204c9f79dec5c609ea695924ef694b19a6cef-d_295x166"/>
        <img style={image }src="https://webinarkhoj.s3.ap-south-1.amazonaws.com/webinar/webinar-1622187777718.jpeg"/>
        <img style={image}src="https://i.ytimg.com/vi/Iwv2nQF3ZJw/maxresdefault.jpg"/>
        </div>

        <button style={{width:"1512px",backgroundColor:"darkgrey",border:"none"}}></button>
        <h1 style={header}>Blogs</h1>
        <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"20px"}}>
                <img  style={image}src="https://lp-admin-static.s3.amazonaws.com/buckets/20200811112756/CSPO-certification.png"/>
                <img style={image }src="https://i.ytimg.com/vi/Iwv2nQF3ZJw/maxresdefault.jpg"/>
                <img style={image}src="https://i.ytimg.com/vi/tYpnJkG7p00/maxresdefault.jpg"/>
                <img style={image} src="https://dtkmdj8r1pumb.cloudfront.net/buckets/20191209101006/product-thinking-preview-image.png"/>
                <img style={image} src="https://www.productplan.com/uploads/article-images/Safe-Agile-ProductPlan-1024x683.png"/>
                
        </div>

        <button style={{width:"1512px",backgroundColor:"darkgrey",border:"none"}}></button>
        <h1 style={header}>Podcasts</h1>
        <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"20px"}}>
              <img  style={image}src="https://lp-admin-static.s3.amazonaws.com/buckets/20200811112756/CSPO-certification.png"/>
              <img style={image }src="https://i.ytimg.com/vi/Iwv2nQF3ZJw/maxresdefault.jpg"/>
              <img style={image} src="https://lp-admin-static.s3.amazonaws.com/buckets/20190425071504/Project-manager-role-in-scrum.jpg"/>
        </div>
        <button style={{color:"white",backgroundColor:"red",padding:"10px",fontSize:"20px",
        borderRadius:"15px",border:"none",height:"50px",position:"fixed",bottom:"1px",opacity:"0.8"
        }}>Send Message...</button>
        <button style={{width:"1512px",backgroundColor:"black",border:"none"}}></button>
    </div>
  )
}

export default Video