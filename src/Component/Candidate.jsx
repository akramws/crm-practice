import React from 'react'
import './Style/Candidate.css'
import text from "../assets/images/Wiseskulls_Text.png"


const Candidate = () => {
  return (
    <div className='candidate-page'>
      <div className="header"></div>
      <div className="candidate-container">
        <nav className='candidate-navbar'></nav>
        <main className='candidate-main'></main>
        <footer className='candidate-footer'></footer>
      </div>
     <footer className='name-footer'>
      <img src={text} alt="Wiseskulls"/>
</footer>
    </div>
  )
}

export default Candidate