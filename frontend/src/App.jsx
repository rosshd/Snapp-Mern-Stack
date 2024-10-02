import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Quote from './pages/serviceInquiry'
import About from './pages/about'
import ServicePage from './pages/ServicePage'
import ComingSoon from './pages/ComingSoon'
import Winder from './pages/Winder'
import Printhub from './pages/Printhub'

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route path='/serviceInquiry' element={<Quote />} />
      <Route path='/about' element={<About />} />
      <Route path='/gallery' element={<ServicePage />} />
      <Route path='/comingSoon' element={<ComingSoon />} />
      <Route path='/winder' element={<Winder />} />
      <Route path='/printHub' element={<Printhub />} />
    </Routes>
  )
}

export default App