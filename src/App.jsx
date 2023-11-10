import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Layout from './components/layout/Layout'
import Projet from './pages/projets/Projet'
import './styles/styles.scss'
import Page404 from './pages/page404/page404'

function App() {
   return (
      <BrowserRouter>
         <Layout>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/projet/:id" element={<Projet />} />
               <Route path="*" element={<Page404 />} />
            </Routes>
         </Layout>
      </BrowserRouter>
   )
}

export default App
