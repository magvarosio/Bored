import { useNavigate } from 'react-router-dom'

import charityImg from '../../images/Charity.webp'
import cookingImg from '../../images/Cooking.webp'
import diyImg from '../../images/Diy.webp'
import educationImg from '../../images/Education.webp'
import musicImg from '../../images/Music.webp'
import recreationImg from '../../images/Recreational.png'
import relaxationImg from '../../images/Relaxation.jpeg'
import houseworkImg from '../../images/Housework.png'
import socialImg from '../../images/Social.jpeg'

// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ActivityIndex = () => {
  //! Nav
  const navigate = useNavigate()

  //! Variables

  const choicesArray = [
    {
      type: 'Cooking',
      image: cookingImg
    },
    {
      type: 'Charity',
      image: charityImg
    },
    {
      type: 'Music',
      image: musicImg
    },
    {
      type: 'Social',
      image: socialImg
    },
    {
      type: 'Recreational',
      image: recreationImg
    },
    {
      type: 'Busywork',
      image: houseworkImg
    },
    {
      type: 'Education',
      image: educationImg
    },
    {
      type: 'DIY',
      image: diyImg
    },
    {
      type: 'Relaxation',
      image: relaxationImg
    }
  ]

  const navigateToChoicePage = (choice) => {
    navigate('/choice', { state: { choice: choice } })
  }

  const getRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * choicesArray.length)
    const randomChoice = choicesArray[randomIndex]
    navigateToChoicePage(randomChoice)
  }

  // ! JSX
  return (
    <main className="index-page">
      <Container className="mt-0">
        <Row>
          {choicesArray.map((choice) => {
            return (
              <Col
                key={choice.type}
                className="activity-card mt-4 col-md-4 col-sm-6 col-lg-4 col-xl-4 col-xxl-4"
                onClick={() => navigateToChoicePage(choice)}
              >
                <Card>
                  <Card.Body>
                    <Card.Title className="mb-0"></Card.Title>
                    <h2>{choice.type}</h2>
                    <div className="card-image">
                      <img
                        className="card-image"
                        src={choice.image}
                        alt={choice.type}
                      />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
          <Button
            id="suprise"
            className="btn btn-main mt-3 mb-3"
            onClick={() => getRandomChoice()}
          >
            Suprise Me!
          </Button>
        </Row>
      </Container>
    </main>
  )
}

export default ActivityIndex
