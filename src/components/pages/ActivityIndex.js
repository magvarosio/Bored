import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const ActivityIndex = () => {
  // ! State
  // const [choice, setChoice] = useState([]) // check if an array or object?

  // ! JSX
  return (
    <main className="index-page">
      <Container className="mt-4">
        <Row>
          <Col>
            <Link to="/choice/key" className="btn btn-main">
              <Card>
                <div className="card-image"></div>
                <Card.Body>
                  <Card.Title className="mb-0"></Card.Title>
                  <h2>Cooking</h2>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link>
              <Card>
                <div className="card-image"></div>
                <Card.Body>
                  <Card.Title className="mb-0"></Card.Title>
                  <h2>Social</h2>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link>
              <Card>
                <div className="card-image"></div>
                <Card.Body>
                  <Card.Title className="mb-0"></Card.Title>
                  <h2>Recreation</h2>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link>
              <Card>
                <div className="card-image"></div>
                <Card.Body>
                  <Card.Title className="mb-0"></Card.Title>
                  <h2>DIY</h2>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link>
              <Card>
                <div className="card-image"></div>
                <Card.Body>
                  <Card.Title className="mb-0"></Card.Title>
                  <h2>Education</h2>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link>
              <Card>
                <div className="card-image"></div>
                <Card.Body>
                  <Card.Title className="mb-0"></Card.Title>
                  <h2>Charity</h2>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link>
              <Card>
                <div className="card-image"></div>
                <Card.Body>
                  <Card.Title className="mb-0"></Card.Title>
                  <h2>Household</h2>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link>
              <Card>
                <div className="card-image"></div>
                <Card.Body>
                  <Card.Title className="mb-0"></Card.Title>
                  <h2>Music</h2>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link>
              <Card>
                <div className="card-image"></div>
                <Card.Body>
                  <Card.Title className="mb-0"></Card.Title>
                  <h2>Relaxation</h2>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <button>Suprise Me!</button>
        </Row>
      </Container>
    </main>
  )
}

export default ActivityIndex
