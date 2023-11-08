import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Layout from './components/layout/Layout'
import './styles/styles.scss'
import Test from './pages/test/Test'

function App() {
   return (
      <BrowserRouter>
         <Layout>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/test" element={<Test />} />
            </Routes>
         </Layout>
      </BrowserRouter>
   )
}

export default App
