// React Components
import { Link } from 'react-router-dom'

import scrollGif from '../../images/Scrolling.gif'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Home = () => {
  return (
    <main className="hero-page text-center">
      <div className="hero">
        <h1 className="display-3">🥱 Bored? 🥱</h1>
        <Col md="6">
          <img
            className="card-image"
            src={scrollGif}
            alt="Stop scrolling, start living"
          />
        </Col>
        <p className="lead">Stop being boring.</p>
        <Button as={Link} to="/choiceIndex" className="btn btn-main">
          Click and discover something fun to do today!
        </Button>
      </div>
    </main>
  )
}

export default Home
