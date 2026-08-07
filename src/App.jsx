import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import home from './assets/home.png'
import search from './assets/search.png'
import etc from './assets/other.png'
import banner from './assets/micheal.png'
import s1 from './assets/beat.jpg'
import s2 from './assets/billie.jpg'
import s3 from './assets/bw.jpg'
import s4 from './assets/dont.jpg'
import s5 from './assets/huamn.jpg'
import s6 from './assets/man.jpg'
import s7 from './assets/remember.jpg'
import s8 from './assets/rock.jpg'
import s9 from './assets/thriller.jpg'
import s10 from './assets/wanna.jpg'
import s11 from './assets/bad.jpg'
import s12 from './assets/smooth.jpg'
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
            <p class="eyebrow" >The <span id="span">King</span> of Pop</p>
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

  <div className="songs-grid">
    <div className="song-card">
      <img src={s2} alt="Billie Jean" />
      <div className="song-info">
        <h3>Billie Jean</h3>
        <p>Thriller • 1982</p>
      </div>
    </div>

    <div className="song-card">
      <img src={s1} alt="Beat It" />
      <div className="song-info">
        <h3>Beat It</h3>
        <p>Thriller • 1982</p>
      </div>
    </div>

    <div className="song-card">
      <img src={s9} alt="Thriller" />
      <div className="song-info">
        <h3>Thriller</h3>
        <p>Thriller • 1982</p>
      </div>
    </div>

    <div className="song-card">
      <img src={s11} alt="Bad" />
      <div className="song-info">
        <h3>Bad</h3>
        <p>Bad • 1987</p>
      </div>
    </div>

    <div className="song-card">
      <img src={s12} alt="Smooth Criminal" />
      <div className="song-info">
        <h3>Smooth Criminal</h3>
        <p>Bad • 1987</p>
      </div>
    </div>

    <div className="song-card">
      <img src={s4} alt="Don't Stop 'Til You Get Enough" />
      <div className="song-info">
        <h3>Don't Stop 'Til You Get Enough</h3>
        <p>Off the Wall • 1979</p>
      </div>
    </div>

    <div className="song-card">
      <img src={s8} alt="Rock with You" />
      <div className="song-info">
        <h3>Rock with You</h3>
        <p>Off the Wall • 1979</p>
      </div>
    </div>

    <div className="song-card">
      <img src={s6} alt="Man in the Mirror" />
      <div className="song-info">
        <h3>Man in the Mirror</h3>
        <p>Bad • 1987</p>
      </div>
    </div>

    <div className="song-card">
      <img src={s5} alt="Human Nature" />
      <div className="song-info">
        <h3>Human Nature</h3>
        <p>Thriller • 1982</p>
      </div>
    </div>

    <div className="song-card">
      <img src={s7} alt="Remember the Time" />
      <div className="song-info">
        <h3>Remember the Time</h3>
        <p>Dangerous • 1991</p>
      </div>
    </div>

    <div className="song-card">
      <img src={s3} alt="Black or White" />
      <div className="song-info">
        <h3>Black or White</h3>
        <p>Dangerous • 1991</p>
      </div>
    </div>

    <div className="song-card">
      <img src={s10} alt="Wanna Be Startin' Somethin'" />
      <div className="song-info">
        <h3>Wanna Be Startin' Somethin'</h3>
        <p>Thriller • 1982</p>
      </div>
    </div>
  </div>
</section>
    </>
  )

}

export default App
