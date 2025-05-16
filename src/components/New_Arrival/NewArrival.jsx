import React from 'react'
import {useState, useEffect} from 'react'
import {Container, Row, Col} from 'reactstrap'
import ProductList from '../ProductList/ProductList'
import Products from '../../assets/data/products'

const NewArrival = () => {

    const [mobileproducts, setMobileProducts] = useState([])
    const [wirelessProducts, setWirelessProducts] = useState([])

    useEffect(()=>{
        const filteredMobileProducts = Products.filter((item)=>item.category==="mobile");
        const filteredWirelessProducts = Products.filter((item)=>item.category==="wireless");

        setMobileProducts(filteredMobileProducts);
        setWirelessProducts(filteredWirelessProducts);
    })
  return (
    <section className="new_arrivals">
        <Container>
            <Row>
                <Col lg="12" className='text-center mb-5'>
                    <h2 className="section_title">New Arrivals</h2>
                </Col>
                <ProductList data={mobileproducts}/>
                <ProductList data={wirelessProducts}/>
            </Row>
        </Container>
    </section>
  )
}

export default NewArrival
