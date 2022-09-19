
import React from 'react'
import Navbar from './Navbar/index'
import Matter from './Matter'
import Product from './Product'
import Trained from './Content/Trainings/Trained'
import Meet from './Meet'
import Web from './Web'
import Conf from './Conf'
import Video from './Video'
import Topnav from './Topnav'
const App = () => {
  return (
    <div>
<Topnav/>
<Navbar />
    <Matter />
    <Product />
    <Trained/>
    <Meet />
    <Web />
    <Conf />
    <Video />
    </div>
  )
}

export default App