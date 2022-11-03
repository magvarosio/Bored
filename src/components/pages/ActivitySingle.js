import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom' // Importing useParams, we have access to any placeholders in the url
import axios from 'axios'

// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ActivitySingle = () => {
  // ! State
  const [activity, setActivity] = useState([]) // check if an array or object?
  const [errors, setErrors] = useState(false)

  const { activityKey } = useParams()

  // ! Execution
  useEffect(() => {
    const getActivity = async () => {
      try {
        const { data } = await axios.get(
          'https://www.boredapi.com/api/activity/?type=cooking'
        )
        setActivity(data)
      } catch (err) {
        console.log(err)
      }
    }
    getActivity()
  }, [activityKey])

  return (
    <main className="single-page">
      <Container className="mt-4">
        <Row>
          {activity ? (
            <>
              <h1 className="mb-4">Today...</h1>
              <Col md="6">
                <img src="" alt="" />
              </Col>
              <Col md="6">
                <h2>Description</h2>
                <Link to="/activity" className="btn btn-main">
                  Back to activity
                </Link>
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
