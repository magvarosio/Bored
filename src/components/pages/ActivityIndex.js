import { useNavigate } from 'react-router-dom'

import charityImg from '../../images/Charity.jpeg'
import cookingImg from '../../images/Cooking.webp'
import diyImg from '../../images/Diy.webp'
import educationImg from '../../images/Education.webp'
import musicImg from '../../images/Music.webp'
import houseworkImg from '../../images/Housework.webp'
import recreationImg from '../../images/Recreation.webp'
import relaxationImg from '../../images/Relaxation.jpeg'
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
      type: 'Recreation',
      image: recreationImg
    },
    {
      type: 'Housework',
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

  // const randomChoice = () => {
  //   let random = Math.floor(Math.random() * 10)
  //   console.log(choicesArray)
  //   return choicesArray[random]
  // }
  // randomChoice()

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
              <Col
                key={choice.type}
                className="activity-card mb-4"
                onClick={() => handleClick(choice)}
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
          <Button className="btn btn-main" onClick={() => handleClick()}>
            Suprise Me!
          </Button>
        </Row>
      </Container>
    </main>
  )
}

export default ActivityIndex
