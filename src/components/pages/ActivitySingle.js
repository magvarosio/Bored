import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

// ! Bootstrap Components
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const ActivitySingle = () => {
  // ! State
  const [choice, setChoice] = useState({
    type: '',
    activity: '',
    key: ''
  })

  const [errors, setErrors] = useState(false)

  // ! Location

  const location = useLocation() //grabs infro from navigate
  console.log()
  //! Variables

  // ! Execution

  const handleGetChoice = useCallback(async (url) => {
    try {
      const { data } = await axios.get(url)
      setChoice(data)
    } catch (err) {
      console.log(err)
      setErrors(true)
    }
  }, [])
  useEffect(() => {
    handleGetChoice(
      `https://www.boredapi.com/api/activity/?type=${location.state.choice.type.toLowerCase()}`
    )
  }, [location, handleGetChoice])

  // const getRandomChoice = () => {
  //   handleGetChoice('http://www.boredapi.com/api/activity')
  // }

  // getRandomChoice()

  return (
    <main className="single-page">
      <Container className="mt-4">
        {choice ? (
          <>
            <h1 className="mb-4">Today, why not...</h1>
            <Card.Body>
              <Col className="single-activity-card mb-6">
                <img
                  className="single-card-image"
                  src={location.state.choice.image}
                  alt={location.state.choice.type}
                />
              </Col>
              <Col className="single-text" md="4">
                <h2>{choice.activity}!</h2>
                <Button
                  className="btn btn-main"
                  onClick={() =>
                    handleGetChoice(
                      `https://www.boredapi.com/api/activity/?type=${location.state.choice.type.toLowerCase()}`
                    )
                  }
                >
                  Try again
                </Button>
                <Button as={Link} to="/choiceIndex" className="btn btn-main">
                  Back to activity
                </Button>
              </Col>
            </Card.Body>
          </>
        ) : errors ? (
          <h2>Something went wrong! Please try again later!</h2>
        ) : (
          <h2>Loading</h2>
        )}
      </Container>
    </main>
  )
}

export default ActivitySingle
