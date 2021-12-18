import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const url ='/api/products'
const Airtable = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(url)
      setProducts(data)
      
    } catch (error) {
      console.log(error.response.data);
    }
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <section className='section section-center'>
      <div className='title'>
        <h2>Airtable</h2>
        <div className='title-underline'></div>
      </div>
      <div className='products'>
        {
          products.map(i=> {
            const {id, name, url, price}=i
            return (
            <Link to={`/${id}`} key={id} className="product">
              <img src={url} alt={name} />
              <div className="info">
                <h5>{name}</h5>
                <h5 className="price">${price}</h5>
              </div>
            </Link>
          )
          })
          
        }
      </div>
    </section>
  )
}

export default Airtable
