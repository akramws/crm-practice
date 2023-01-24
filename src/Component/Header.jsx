import React, { useState } from 'react'
import './Style/HeaderStyle.css'
import WiseSkull from "../assets/images/Wiseskulls_Text.png"
import WiseSkull2 from "../assets/images/wise.png"
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io"
import { Button, Modal } from 'antd';
import { Popover } from 'antd';
import './Style/AddRequirementPop.css';
import AddRequirementPop from './AddRequirementPop'

import { Link, useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const Navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = (e) => {
    setOpen(false);
  };
  const handleCancel = (e) => {
    setOpen(false);
  };
  let location = useLocation();

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
            <button onClick={() => { Navigate("/login") }} >Log Out</button>
          </div>
        </div>
      </Modal>

      <header className='main-header' title='Header Created By Neha'>
        <div className='logo-right'>
          <img className='logo-img' src={WiseSkull2} alt="" onClick={() => { Navigate("/dashboard") }} />
          <img className='photo-img ' src={WiseSkull} alt=""  onClick={() => { Navigate("/dashboard") }}/>
        </div>
        <div className='secund-part'>
          <div>
            <Popover placement="bottomRight" content={<AddRequirementPop/>} trigger="click">
              <button className='second-btn' >Add Requirement</button>
            </Popover>
            <button className='fist-btn' onClick={showModal}  >Log Out</button>

          </div>

          <div className='text-liner'>
           {location.pathname !== "/dashboard" &&  location.pathname !== "/manage-team" &&<span><IoIosArrowRoundBack className='icon-Logo' /></span>}
           {location.pathname !== "/dashboard" &&  location.pathname !== "/manage-team" &&<Link className="Link" to="/dashboard">Dashboard</Link> }
           {location.pathname === "/dashboard" &&<span><IoIosArrowRoundBack className='icon-Logo' /></span>}
           {location.pathname === "/dashboard" &&<Link className="Link" to="/form">Go to Candidate Forms</Link> }
           
            <div className='box-border'></div>
            { location.pathname !=="/candidate-listing" ? <Link className="Link" to="/candidate-listing">Go to Candidate Listing</Link>
            : <Link className="Link" to="/form">Go to Candidate Form</Link>}
            <span><IoIosArrowRoundForward className='icon-Logo' /></span>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header