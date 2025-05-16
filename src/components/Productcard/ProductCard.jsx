import React from 'react'

import productImg from '../../assets/images/arm-chair-01.jpg'
import {motion} from 'framer-motion'

import { LuPlus } from "react-icons/lu";
import './product_card.css'
import {Col} from "reactstrap";
import {Link} from 'react-router-dom'

const ProductCard = ({item}) => {
  return (
    <Col lg='3' md='4' className="mb-2">
        <div className="product_item">
        <div className="product_img">
            <motion.img whileHover={{scale: 0.9}} src={item.imgUrl} alt="" />
        </div>
        <div className="p-2 product_info">
        <h5 className="product_name"><Link to={'/shop/${item.id}'}>{item.productName}</Link></h5>
        <span className="text-center">{item.category}</span>
        </div>        
        <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
            <span className="price">Rs.{item.price}</span>
            <motion.span whileHover={{scale: 1.2}} className='icon'><LuPlus /></motion.span>
        </div>
    </div>
    </Col>
    
  )
}

export default ProductCard
