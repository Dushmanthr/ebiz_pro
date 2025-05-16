import React from 'react'
import {useState, useEffect} from 'react'
import {Container, Row, Col} from 'reactstrap'
import ProductList from '../ProductList/ProductList'
import Products from '../../assets/data/products'


const PopularList = () => {

    const [popularCategory, setPopularCategory] = useState([])
    

    useEffect(()=>{
        const filteredPopularCategory = Products.filter((item)=>item.category==="watch");
        

        setPopularCategory(filteredPopularCategory);
        
    })
  return (
    <section className="popular_category">
        <Container>
            <Row>
                <Col lg="12" className='text-center mb-5'>
                    <h2 className="section_title">New Arrivals</h2>
                </Col>
                <ProductList data={popularCategory}/>
                
            </Row>
        </Container>
    </section>
  )
  
}

export default PopularList
