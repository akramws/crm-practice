import React, { useState } from 'react'
import './Style/HeaderStyle.css'
import WiseSkull from "../assets/images/Wiseskulls_Text.png"
import WiseSkull2 from "../assets/images/wise.png"
import { IoIosArrowRoundForward,IoIosArrowRoundBack} from "react-icons/io"
import { Button, Modal } from 'antd';
import { Link } from 'react-router-dom'

const Header = () => {

  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = (e) => {
    console.log(e);
    setOpen(false);
  };
  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };

  
  return (
    <>
        
      <Modal
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}>
          
        <div className='pop-up'>
          <h1>Confirm  Log Out?</h1>
          <div className='popup-btn'>
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleOk} >Log Out</button>
          </div>
        </div>
      </Modal>


    
      <header className='main-header'>
        <div className='logo-right'>
          <img className='logo-img' src={WiseSkull2} alt="" />
          <img className='photo-img ' src={WiseSkull} alt="" />
        </div>
        <div className='secund-part'>
          <div>
          <button className='second-btn' >Add Requirement</button>
          <button className='fist-btn'   onClick={showModal}  >Log Out</button>

          </div>
          
          <div className='text-liner'>
          <span><IoIosArrowRoundBack className='icon-Logo' /></span>
          <Link  className="Link" to="/dashboard">Dashboard</Link>
            <div className='box-border'></div>
            <Link  className="Link" to="/candidate-listing">Go to Candidate Listing</Link>
            <span><IoIosArrowRoundForward className='icon-Logo' /></span>
          </div>
          </div>
      </header>
    </>
  )
}

export default Header