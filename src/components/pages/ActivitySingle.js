import { useState, useEffect } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom' // Importing useParams, we have access to any placeholders in the url
import axios from 'axios'

// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
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
  // const { choiceKey } = useParams()
  // const { type, activity, key } = choice
  const location = useLocation() //grabs infro from navigate
  console.log()
  //! Variables

  // ! Execution
  const handleGetChoice = async () => {
    try {
      const { data } = await axios.get(
        `https://www.boredapi.com/api/activity/?type=${location.state.choice.type.toLowerCase()}`
      )
      // console.log(activity, type, key)
      setChoice(data)
    } catch (err) {
      console.log(err)
      // setErrors(true)
    }
  }

  useEffect(() => {
    const getChoice = async () => {
      try {
        const { data } = await axios.get(
          `https://www.boredapi.com/api/activity/?type=${location.state.choice.type.toLowerCase()}`
        )
        // console.log(activity, type, key)
        setChoice(data)
      } catch (err) {
        console.log(err)
        // setErrors(true)
      }
    }
    getChoice()
  }, [location])

  return (
    <main className="single-page">
      <Container className="mt-4">
        <Row>
          {choice ? (
            <>
              <h1 className="mb-4">Today...</h1>
              <Col md="6">
                {/* <div
                  className="card-image"
                  style={{
                    backgroundImage: `url(${location.state.choice.image})`
                  }}
                ></div> */}
                <img
                  src={location.state.choice.image}
                  alt={location.state.choice.type}
                />
              </Col>
              <Col md="6">
                <h2>{choice.activity}</h2>
                <Button className="btn btn-main" onClick={handleGetChoice}>
                  Try again
                </Button>
                <Button as={Link} to="/choiceIndex" className="btn btn-main">
                  Back to activity
                </Button>
              </Col>
            </>
          ) : errors ? (
            <h2>Something went wrong! Please try again later!</h2>
          ) : (
            <h2>Loading</h2>
          )}
        </Row>
      </Container>
    </main>
  )
}

export default ActivitySingle
