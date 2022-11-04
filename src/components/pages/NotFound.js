import notFoundImg from '../../images/404.jpg'

const NotFound = () => {
  return (
    <>
      <h1>Not Found</h1>
      <div>
        <img src={notFoundImg} alt="Logo" />
      </div>
    </>
  )
}

export default NotFound
