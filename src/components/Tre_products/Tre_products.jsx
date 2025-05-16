import React from 'react'
import {useState,useEffect} from 'react'
import {Container, Row, Col} from 'reactstrap'
import './tre_products.css'
import ProductList from '../ProductList/ProductList'
import Products from '../../assets/data/products'

const Tre_products = () => {

    const [data, setData] = useState([])
    const [bestSales, setBestSales] = useState([])

    useEffect(()=>{
      const filteredTrendingProducts = Products.filter((item)=>item.category==="chair");
      const filteredBestProducts = Products.filter((item)=>item.category==="sofa"); 
      setData(filteredTrendingProducts);
      setBestSales(filteredBestProducts); 
    },[])
  return (
    <>
    <section className="trending_products">
        <Container>
           <Row>
            <Col lg='12' className="text-center">
                <h2 className="section_title">Trending Products</h2>
            </Col>
           <ProductList  data={data} /> 
           </Row> 
        </Container>
    </section>
    <section className="best_sales">
      <Container>
      <Row>
            <Col lg='12' className="text-center">
                <h2 className="section_title">Best Sales</h2>
            </Col>
            <ProductList data={bestSales} /> 
           </Row> 
      </Container>
    </section>
   
    </>
  )
}

export default Tre_products
