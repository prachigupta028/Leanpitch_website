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
          marginLeft:"10px",
          marginTop:"20px"
      }

  return (
    <div style={main}>
    <img  style={image}src="https://i.vimeocdn.com/video/801225227-e5d302662feaf7971069bebab7e204c9f79dec5c609ea695924ef694b19a6cef-d_295x166"/>
   <img style={image }src="https://webinarkhoj.s3.ap-south-1.amazonaws.com/webinar/webinar-1622187777718.jpeg"/>
   <img style={image}src="https://i.ytimg.com/vi/Iwv2nQF3ZJw/maxresdefault.jpg"/>
    </div>
  )
}

export default index