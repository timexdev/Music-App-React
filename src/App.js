import React from 'react'
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import Music from './Components/Music'

import Playlist from './Components/Playlist'
import Popular from './Components/Popular'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <Music></Music>
      <Popular></Popular>
      {/* <Playlist></Playlist> */}
      <Footer></Footer>

     
    </>
  )
}

export default App