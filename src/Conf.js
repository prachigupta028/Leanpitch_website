import React from 'react'

const Conf = () => {
    const btnRed={
        color: "white",
 fontSize: "25px",
 borderRadius: "30px",
 backgroundColor: "red",
 width: "500px",
 padding: "5px 70px",
 textDecoration: "none",
 marginLeft: "42vw",
 marginTop: "-5vh",
 marginBottom: "30vh"
    }
  return (
    <div style={{backgroundColor:"black",padding:"20px"}}>
        <h1 style={{fontSize:"60px",textAlign:"center",color:"white"}}>Our Conference</h1>
        <div style={{textAlign:"center"}}>
            <button style={{fontSize:"30px",width:"200px",backgroundColor:"white",color:"black"}}>Upcoming</button>
            <button style={{fontSize:"30px",width:"100px",backgroundColor:"black",border:"1px solid white",color:"white"}}>Past</button>
        </div>
        <div style={{color:"white",fontSize:"25px",textAlign:"center",padding:"5px"}}>
            <p>Conferences are not just about learning from the speakers.
             It's also about meeting new people, learning from attendees, making connections,
              getting to know each other and being part of a community.</p>

              <p>Having hosted the conference online last year and after close consultation 
              with the community, speakers, exhibitors and event partners, we have decided to
               host our next conference in person to make it more effective.</p>
               <p>We will be back with more information once COVID subsides</p>
        </div>
        
        <a href="#" style={btnRed}>Notify Me</a>
    </div>
  )
}

export default Conf