// React Components
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className="hero-page text-center">
      <div className="hero">
        <h1 className="display-3">🥱 Bored? 🥱</h1>
        <p className="lead">Stop being boring.</p>
        <Link to="/choiceIndex" className="btn btn-main">
          Discover something fun to do today!
        </Link>
      </div>
    </main>
  )
}

export default Home
