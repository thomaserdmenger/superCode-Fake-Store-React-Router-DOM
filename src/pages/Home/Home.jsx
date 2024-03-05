import { useLocation } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const location = useLocation()
  const { pathname } = location
  const isHomePage = pathname === '/'

  return (
    <div className={isHomePage ? 'wrapper--homepage' : 'wrapper'}>
      <main>
        <section className='home'>
          <div className='home__content-container'>
            <h1 className='home__title'>Fabulous Fake Shop</h1>
            <p className='home__slogan'>
              Start your Shopping Tour with Fake Shop.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
