import React from 'react'

const index = () => {
    const main={
        border:"5px solid yellow",
        width:"800px",
        marginLeft:"460px",
        paddingBottom:"100px",
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
    <img  style={image}src="https://lp-admin-static.s3.amazonaws.com/buckets/20200811112756/CSPO-certification.png"/>
   <img style={image }src="https://i.ytimg.com/vi/Iwv2nQF3ZJw/maxresdefault.jpg"/>
   
    </div>
  )
}

export default index