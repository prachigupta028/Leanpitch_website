
import React from 'react'
import { useState, useRef } from 'react'
import Trainings from '../Content/Trainings';
import Meetsup from '../Content/Meetsup';
import Webinar from '../Content/Webinar';
import Conference from '../Content/Conference';
import Videos from '../Content/Videos';
import Pm from '../Content/Pm';
import Blogs from '../Content/Blogs';
import Podcasts from '../Content/Podcasts';
import './style.css'
const Datas = [
  "Trainings",
  "Meetups",
  "Webinars",
  "Conference",
  "Videos",
  "PM Speak Series",
  "Blogs",
  "Podcasts",
  "Be A Speaker",
  "Be A Volunteer",
  "About Us",
];


const Navbar = () => {
  const borderRef = useRef();
  const [texts, setTexts] = useState();
  const [hoverElement, setHoverElement] = useState();

  const clicked = (e) => {
    e.target.style.color = 'black';
    borderRef.current.style.display = "block";
    setTexts(e.target.textContent);
    setHoverElement(e.target);
  };


  const left = (e) => {
    borderRef.current.style.display = "none";
    hoverElement.style.color = 'white';
    
  };
  const SectionHover = (e) => {
    borderRef.current.style.display = "block";
    hoverElement.style.color = 'black';

  };

  const SectionOut = (e) => {
    borderRef.current.style.display = "none";
    hoverElement.style.color = 'white';
  };

  return (
    <div className='header'>
        <div className='container'>
          
          {Datas.map((element) => {
            return (
              <div  >
                <h1 className='text'  onMouseOver={clicked}  onMouseLeave={left}>{element}</h1>
              </div>
            );
          })}
         
        </div>


        <section className="right-sec" onMouseOver={SectionHover} onMouseLeave={SectionOut} ref={borderRef} >
                {texts === "Blogs" && <Blogs />}
                {texts === "Podcasts" && <Podcasts />}
                {texts === "Conference" && <Conference />}
                {texts === "Meetups" && <Meetsup />}   
                {texts === "Trainings" && <Trainings />}
                {texts === "Webinars" && <Webinar />}
                {texts === "Videos" && <Videos />}
                {texts === "PM Speak Series" && <Pm />}  
        </section>
        

    </div>
  )
}

export default Navbar