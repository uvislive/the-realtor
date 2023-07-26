import React from 'react'
import Navbar from './Navbar'
import Banner from "./Banner"
import Home from './Home'
import AddHome from './AddHome'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Login'
import Category from './Category'
import SearchBar from './SearchBar'
import Search from './Search'
import HomeDetail from './HomeDetail'

function App() {
  return (
    <div className="app bg-slate-300">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Banner />}></Route>
          <Route path="/home" element={<Banner />}></Route>
          <Route path="/addhome" element={<AddHome />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/category" element={<Category />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/homes/:homeid" element={<HomeDetail />}></Route>
        </Routes>
      </BrowserRouter>


    </div >


  )
}

export default App