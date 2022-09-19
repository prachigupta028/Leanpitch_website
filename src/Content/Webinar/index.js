import React from 'react'

const index = () => {
    const main={
        border:"5px solid yellow",
        width:"800px",
        marginLeft:"460px",
        paddingBottom:"300px",
        marginTop:"-80vh",
        marginBottom:"40px",
        textAlign:"center"
        
      }
      const image={
        width:"300px",
        height:"250px",
        marginLeft:"-450px",
        marginTop:"10px"
      }
  return (
    <div style={main}>
     <a href="https://webinarkhoj.com/webinars/remaining-in-problem-domain-for-user-needs---how-does-it-help--d691">
     <img style={image} src="https://webinarkhoj.s3.ap-south-1.amazonaws.com/dev/1631708294776-Remaining%20in%20Problem%20Domain%20for%20User%20Needs%20-%20How%20does%20it%20help.jpeg"/>
    </a>
    </div>
  )
}

export default index