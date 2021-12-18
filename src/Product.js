import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
const url = '/api/products'
const Product = () => {
const [isLoading, setIsLoading] = useState(true);
const [product, setProduct] = useState(null);
const {productID}= useParams();
const fetchProduct = async() => {
 setIsLoading(true)
 try {
  const {data: {fields}} = await axios.get(`${url}?id=${productID}`)
setProduct(fields);

 } catch (error) {
  console.log(error.response.data);
 }
 setIsLoading(false)
}
useEffect(()=> {
fetchProduct()
},[])

if(isLoading) {
 return (
  <section className='section section-center'>
   <h2>Loading...</h2>
  </section>
 )
} 
const { name, desc,image,price } = product;
const urlImage = image[0].url


 return (
   <section className='section section-center content'>
     <Link className='link' to='/'>
       Back Home
     </Link>
     <div>
       <div className='title'>
         <h2>{name}</h2>
         <div className='title-underline'></div>
       </div>
       <article className='single-product'>
         <img src={urlImage} alt={name} className='single-product-img' />
         <div>
           <h5 className='title'>{name}</h5>
           <h5 className='price'>${price}</h5>
           <p className='desc'>{desc}</p>
         </div>
       </article>
     </div>
   </section>
 )
}

export default Product
