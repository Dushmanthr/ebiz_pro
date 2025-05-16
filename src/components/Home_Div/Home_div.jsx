import React from 'react'
import "./home_div.css"

import {Link} from "react-router-dom";
import {motion} from "framer-motion"
import { Container, Row, Col } from 'reactstrap'
import HeroImg from "../../assets/images/hero-img.png"

const Home_div = () => {

    const year = new Date().getFullYear()
    return (
        <section className="hero_section">
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="hero_content">
                            <p className="hero_subtitle">
                                Trending Product in {year}
                            </p>
                            <h1>Make Your Interior with more Minimalist </h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Debitis quae adipisci itaque voluptate veniam esse.</p>

                            <motion.button whileTap={{ scale: 1.2}} className="buy_btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
                        </div>
                    </Col>

                   { <Col lg="6" md="6">
                        <div className="hero_img">
                            <img src={HeroImg} alt="" />
                        </div>
                    </Col>}
                </Row>
            </Container>
        </section>
    )
}

export default Home_div
