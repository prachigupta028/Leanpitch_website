import React from 'react'

const Meet = () => {
  return (
    <div>
    <button style={{width:"1512px",backgroundColor:"black"}}></button>
        <h1 style={{fontSize:"60px",textAlign:"center"}}>Our Meetups</h1>
        <div style={{textAlign:"center"}}>
            <button style={{fontSize:"30px",width:"200px",backgroundColor:"black",color:"white"}}>Upcoming</button>
            <button style={{fontSize:"30px",width:"100px"}}>Past</button>
        </div>
        <select style={{marginLeft:"45vw",marginTop:"3vh",fontSize:"20px"}}>
            <option>Filter By City</option>
            <option>Banglore</option>
            <option>Chennai</option>
            <option>Delhi</option>
            <option>Hyderabad</option>
            <option>Pune</option>
        </select>
        <h2 style={{fontSize:"40px",textAlign:"center"}}>Awesome meetups will be here soon!</h2>
    </div>
  )
}

export default Meet