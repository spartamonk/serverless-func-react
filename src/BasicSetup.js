import React, { useEffect, useState } from 'react'
import axios from 'axios'
const url =
  'https://serverless-functions-application.netlify.app/api/2-basic-api'
const BasicSetup = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(url)
      setProducts(data)
    } catch (error) {
      console.log(error.response.data)
    }
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <section className='section section-center'>
      <div className='title'>
        <h2>basic setup</h2>
        <div className='title-underline'></div>
      </div>
      <div className='products'>
        {products.map((i) => {
          const {
            id,
            name,
            image: { url },
            price,
          } = i
          return (
            <article key={id} className='product'>
              <img src={url} alt={name} />
              <div className='info'>
                <h5>{name}</h5>
                <h5 className='price'>${price}</h5>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default BasicSetup
