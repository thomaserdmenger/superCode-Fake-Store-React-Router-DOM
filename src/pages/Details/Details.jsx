import { useEffect, useState } from 'react'
import './Details.css'
import { Link, useParams } from 'react-router-dom'

const Details = () => {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error('Data not found', err))
  }, [])

  const { id } = useParams()

  useEffect(() => {
    const result = data.find((item) => Number(item.id) === Number(id))
    setFilteredData(result)
  }, [data])

  return (
    <div className='wrapper'>
      <main>
        <section className='details'>
          {filteredData ? (
            <article className='details__container'>
              <h3 className='details__title'>{filteredData.title}</h3>
              <img
                className='details__image'
                src={filteredData.image}
                alt={filteredData.title}
              />
              <p className='details__price'>
                Price: {Number(filteredData.price).toFixed(2)} €{' '}
              </p>
              <p className='details__description'>{filteredData.description}</p>
              <Link
                className='details__link'
                to='/shop'>
                Back to Shop
              </Link>
            </article>
          ) : (
            <p>Loading...</p>
          )}
        </section>
      </main>
    </div>
  )
}

export default Details
