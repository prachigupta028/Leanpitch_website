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
   <img style={image}src="https://i.ytimg.com/vi/tYpnJkG7p00/maxresdefault.jpg"/>
   <img style={image} src="https://dtkmdj8r1pumb.cloudfront.net/buckets/20191209101006/product-thinking-preview-image.png"/>
   <img style={image} src="https://www.productplan.com/uploads/article-images/Safe-Agile-ProductPlan-1024x683.png"/>
   <img style={image} src="https://lp-admin-static.s3.amazonaws.com/buckets/20190425071504/Project-manager-role-in-scrum.jpg"/>
    </div>
  )
}

export default index