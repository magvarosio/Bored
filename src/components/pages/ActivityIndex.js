import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

import charityImg from '../../images/Charity.jpeg'
// import cookingImg from '../../images/Cooking.webp'
// import diyImg from '../../images/DIY.webp'
// import educationImg from '../../images/Charity.jpeg'
// import musicImg from '../../images/Charity.jpeg'
// import houseworkImg from '../../images/Charity.jpeg'
// import recreationImg from '../../images/Charity.jpeg'
// import relaxationImg from '../../images/Charity.jpeg'
// import socialImg from '../../images/Charity.jpeg'

// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const ActivityIndex = () => {
  // ! State
  const [choice, setChoice] = useState([]) // check if an array or object?

  //! Nav
  const navigate = useNavigate()

  //! Variables

  const choicesArray = [
    {
      type: 'Cooking',
      image: charityImg
    },
    {
      type: 'Charity',
      image: ''
    },
    {
      type: 'Music',
      image: ''
    },
    {
      type: 'Social',
      image: ''
    },
    {
      type: 'Recreation',
      image: ''
    },
    {
      type: 'Household',
      image: ''
    },
    {
      type: 'Education',
      image: ''
    },
    {
      type: 'DIY',
      image: ''
    },
    {
      type: 'Relaxation',
      image: ''
    }
  ]

  const handleClick = (choice) => {
    navigate('/choice', { state: { choice: choice } })
  }

  // ! JSX
  return (
    <main className="index-page">
      <Container className="mt-4">
        <Row>
          {choicesArray.map((choice) => {
            return (
              <Col key={choice.type} onClick={() => handleClick(choice)}>
                {/* <Link to="/choice/key" className="btn btn-main"> */}
                {/* <Link to={`/choice/${choiceKey}`} className="btn btn-main"> */}
                <Card>
                  <div className="card-image"></div>
                  <Card.Body>
                    <Card.Title className="mb-0"></Card.Title>
                    <h2>{choice.type}</h2>
                    <img src={choice.image} alt={choice.type} />
                  </Card.Body>
                </Card>
                {/* </Link> */}
                {/* </Link> */}
              </Col>
            )
          })}
          <button>Suprise Me!</button>
        </Row>
      </Container>
    </main>
  )
}

export default ActivityIndex
