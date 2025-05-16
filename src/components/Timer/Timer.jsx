import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import TimerImg from '../../assets/images/counter-timer-img.png'
import './timer.css'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import Clock from '../Clock/Clock'

const Timer = () => {
  return (
    <section className="timer_count">
        <Container>
            <Row>
                <Col lg='6' md='12' className="count_down-col">
                    <div className="clock_top-content">
                      <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                      <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>  
                    </div>
                    <Clock/>
                    <motion.button whileTap={{scale: 1.2}} className="buy_btn store_btn">
                       <Link to="/shop">Visit Store</Link> 
                    </motion.button>
                </Col>
                <Col lg='6' md='12'className="text-end counter_img">
                    <img src={TimerImg} alt="" />
                </Col>
            </Row>  
        </Container>
       
    </section>
  )
}

export default Timer
