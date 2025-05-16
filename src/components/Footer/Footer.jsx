import React from 'react'
import './footer.css'
import {Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap"
import {Link} from 'react-router-dom'

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4' className='mb-4' md='6'>
          <div className="logo">
           
            <div>
              <h1>GiftGalaxy</h1>
              <p className="footer_text mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Ratione repudiandae illum exercitationem voluptas labore 
              nam dicta inventore est corporis qui.
            </p>
            </div>
            
          </div>
          </Col>
          <Col lg='3' md="3" className='mb-4'>
            <div className="footer_quick-links">
              <h4 className="quick_links-title">
                Top Categories
              </h4>
              <ListGroup>
                  <ListGroupItem className="ps-0 border-0" >
                    <Link to ="#">Mobile Phones</Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to ="#">Modern Sofa</Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to ="#">Arm Chair</Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to ="#">Smart Watches</Link>
                  </ListGroupItem>
                </ListGroup>
            </div>
          </Col>
          <Col lg='2' md="3" className='mb-4'>
          <div className="footer_quick-links">
              <h4 className="quick_links-title">
                Useful Links
              </h4>
              <ListGroup>
                  <ListGroupItem className="ps-0 border-0" >
                    <Link to ="/shop">Shop</Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to ="/cart">Cart</Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to ="/login">Login</Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to ="#">Privacy policy</Link>
                  </ListGroupItem>
                </ListGroup>
            </div>
          </Col>
          <Col lg='3' md="4">
          <div className="footer_quick-links">
              <h4 className="quick_links-title">
                Contact
              </h4>
              <ListGroup className="footer_contact">
                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2" >
                    <span><FaLocationDot /></span>
                    <p>Ruwanwella, Sri Lanka</p>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                    <span><FaPhoneAlt /></span>
                    <p>+362265050</p>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                    <span><MdOutlineEmail /></span>
                    <p>dushr23@gmail.com</p>
                  </ListGroupItem>
                
                </ListGroup>
            </div>
          </Col>
          <Col lg='12'>
            <p className="footer_copyright">Copyright {year} developed by donCreations. All right reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
