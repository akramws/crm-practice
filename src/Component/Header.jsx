import React from 'react'
import './Style/HeaderStyle.css'
import WiseSkull from "../assets/images/Wiseskulls_Text.png"
import WiseSkull2 from "../assets/images/wise.png"
import { IoIosArrowRoundForward,IoIosArrowRoundBack} from "react-icons/io"
const Header = () => {
  return (
    <>
      <header className='main-header'>
        <div className='logo-right'>
          <img className='logo-img' src={WiseSkull2} alt="" />
          <img className='photo-img ' src={WiseSkull} alt="" />
        </div>
        <div className='secund-part'>
          <div>
          <button className='second-btn' >Add Requirement</button>
          <button className='fist-btn'>Log Out</button>

          </div>
          
          <div className='text-liner'>
          <span><IoIosArrowRoundBack className='icon-Logo' /></span>
            <span>Dashboard</span>
            <div className='box-border'></div>
            <span>Go to Candidate Listing</span>
            <span><IoIosArrowRoundForward className='icon-Logo' /></span>
          </div>
          </div>
      </header>
    </>
  )
}

export default Header