import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import Components
import Home from './components/pages/Home'
import ActivityIndex from './components/pages/ActivityIndex'
import NotFound from './components/pages/NotFound'
import PageNavbar from './components/common/PageNavbar'
import ActivitySingle from './components/pages/ActivitySingle'

const App = () => {
  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <PageNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/choice" element={<ActivityIndex />} />
          <Route path="/choice/:choiceKeys" element={<ActivitySingle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
