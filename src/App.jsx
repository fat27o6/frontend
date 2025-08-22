import { useState } from "react"
import { Routes, Route } from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css"
import Stack from 'react-bootstrap/Stack'

import Navigation from "./components/navigation"
import About from "./components/about"
import MoviesList from './components/movies-list'
import Login from "./components/login"
import MovieDetail from "./components/movie-detail"

function App(){
  const [user, setUser] = useState(null)

  async function login(user = null){
    setUser(user)
  }
  async function logout(){
    setUser(null)
  }

  return(
    <Stack>
      <Navigation user={user} logout={logout}/>
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login login={login}/>} />
        <Route path="/movies" element={<MoviesList />} />
        <Route path="/" element={<MoviesList />} />
        <Route path="/movies/:id" element={<MovieDetail user={user}/>}  />
      </Routes>
    </Stack>
  )
}

export default App