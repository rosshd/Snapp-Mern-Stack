import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import CreateService from './pages/CreateService'
import DeleteService from './pages/DeleteService'
import EditService from './pages/EditService'
import Quote from './pages/serviceInquiry'
import About from './pages/about'
import ServicePage from './pages/ServicePage'
import ShowService from './pages/ShowService'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/myServices/create' element={<CreateService />} />
      <Route path='/myServices/delete/:id' element={<DeleteService />} />
      <Route path='/myServices/details/:id' element={<ShowService />} />
      <Route path='/myServices/edit/:id' element={<EditService />} />
      <Route path='/serviceInquiry' element={<Quote />} />
      <Route path='/about' element={<About />} />
      <Route path='/gallery' element={<ServicePage />} />
    </Routes>  
  )
}

export default App