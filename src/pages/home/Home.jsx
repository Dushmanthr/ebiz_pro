import React from 'react'

import Home_div from '../../components/Home_Div/Home_div'
import Services from '../.././services/Services'
import TreProducts from '../../components/Tre_products/Tre_products'
import Timer from '../../components/Timer/Timer'
import NewArrival from '../../components/New_Arrival/NewArrival'
import PopularList from '../../components/PopularList/PopularList'


const Home = () => {
  return (
    <div className='herosection'> 
        <Home_div/> 

        <div>
          <Services/>
        </div>
        <TreProducts/>

        <div>
          <Timer/>
        </div>
        <div>
          <NewArrival/>
        </div>
        <div>
          <PopularList/>
        </div>
        
    </div>
    
  )
}

export default Home
