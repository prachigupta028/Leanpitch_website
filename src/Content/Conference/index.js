import { padding } from '@mui/system'
import React from 'react'

const index = () => {
    const main={
        border:"5px solid yellow",
        width:"800px",
        marginLeft:"460px",
        marginTop:"-80vh",
        marginBottom:"40px",
        textAlign:"center",
        fontSize:"25px",
        padding:"20px"
        
      }
      const btn={
        padding:"10px",
        width:"200px",
        Height:"50px",
        borderRadius:"20px",
        backgroundColor:"red",
        color:"white",
        fontWeight:"bold"

      }
  return (
    <div style={main}>
        <p>Conference are not just about learning from the speakers. It's also about 
        meeting new people, learning from attendees, making connections, getting to
        know each other and being part of a community.
        </p>
        <p> Having hosted  the conference online last year and after close consultation
        with the community, speakers, exhibitors and event partners, we have decided to
        host our next confences in person to make it more effective.
        </p>
        <p>We will be back  with more information once COVID subsides</p>
        <button style={btn}>Notify Me  --</button>
    </div>
  )
}

export default index