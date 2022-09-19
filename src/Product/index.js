import React from 'react'
import './style.css'

const index = () => {
  return (
    <div className='products'>
    {/* <hr style={{marginBottom:"90px"}}/> */}
        <h1 >Product Thinking Labs</h1>
        <div className='paraContent'>
        <div style={{float:"left",width:"700px"}}>
            <p>Product Thinking Community introduces PT Labs powered by Leanpitch. 
            Product Managers are creative thinkers and life long researchers. 
            Their curiosity to understand the problem, persistence to solve them,
            and empathy to make the solutions easy makes them resourceful in solving Social Problems.</p>

            <p>If you have it in you and are looking for an opportunity to contribute back 
            to society, join PT Labs. Become part of a product team of volunteers, pickup a
            social problem, swarm together, design, and run experiments to find a 
            problem/solution fit. Present your discovery and be recognized at next Product
            Thinking Conference. Product Thinking community will pursue further on implementing
            a solution in the subsequent cohorts, which you can again be part of.</p>

            <p style={{fontWeight:"bold"}}>Share your interest by submitting your details. We will get back to you 
            with more information.</p>
            </div>
            <img src='https://cdn.discordapp.com/attachments/1000352875844731002/1020592162078994472/pt_lab_image.png'/>
            </div>

            <a href="https://productthinking.io/pt_labs">View Details</a>
            <a href="#">Register Now</a>
            <hr style={{marginTop:"80px"}}/>
    </div>
  )
}

export default index