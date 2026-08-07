import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import home from './assets/home.png'
import search from './assets/search.png'
import etc from './assets/other.png'
import banner from './assets/micheal.png'
import './App.css'

function App() {
  return (
    <>
      <section>
        <nav id='nav'>
          <i id='home' class="fa-solid fa-house"></i>
         <a href="#abt" id='a'> <i class="fa-solid fa-magnifying-glass" id='home2'></i></a>
          <a href="#music" id='a'><i  class="fa-brands fa-spotify" id='home2'></i></a>
        </nav>
      </section>

      <section class="hero" id="home">
        <div class="hero-image-wrap">
          <img src={banner} alt="" />
          <div class="hero-text">
            <h1>Michael <span class="gold">Jackson</span></h1>
            <p>The <span id="span">King</span> of Pop</p>
          </div>
        </div>
      </section>

      <section id='abt'>
        <div>
          <h2 id='legend'>The Legend</h2>
          <div id="goldline"></div>
        </div>

        <div id='details'>
          <p>Michael Jackson is one of the most influential artists in history. A singer, songwriter, dancer, and global icon, his impact transcends race, genre, and generation. With an estimated one billion records sold and the only artist in history to have Top 10 hits across six decades, his reach is unmatched.

            <br></br> <br />From the Jackson 5 to Thriller — the best-selling album of all time — he transformed music videos into cinematic art and set new standards for performance, creativity, and cultural impact.</p>
        </div>
      </section>
      <section id='music'>
         <div>
          <h2 id='legend'>Iconic Songs</h2>
          <div id="goldline"></div>
        </div>
      </section>

    </>
  )

}

export default App
