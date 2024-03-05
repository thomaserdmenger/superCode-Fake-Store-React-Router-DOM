import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Shop.css'

const Shop = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error('Data not found', err))
  }, [])

  return (
    <div className='wrapper'>
      <main>
        <section className='shop'>
          <h1>Fabulous Fake Shop</h1>
          <section className='shop__grid'>
            {data ? (
              data.map((item) => {
                return (
                  <article key={item.id}>
                    <img
                      src={item.image}
                      alt={item.title}
                    />
                    <p>{item.title}</p>
                    <p>{Number(item.price).toFixed(2)} €</p>
                    <Link to={`/shop/${item.id}`}>Show Details</Link>
                  </article>
                )
              })
            ) : (
              <p>Loading...</p>
            )}
          </section>
        </section>
      </main>
    </div>
  )
}

export default Shop
