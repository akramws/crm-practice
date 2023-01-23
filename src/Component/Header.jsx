import React, { useState } from 'react'
import './Style/HeaderStyle.css'
import WiseSkull from "../assets/images/Wiseskulls_Text.png"
import WiseSkull2 from "../assets/images/wise.png"
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io"
import { Button, Modal } from 'antd';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Popover } from 'antd';
import './Style/AddRequirementPop.css'

const Header = () => {
  const Navigate = useNavigate();

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

// Add Requirement Pop 
const content = (
    <div className='AddReq-Pop-Main'>
        <div className='AddReq-Pop-Secound'>
            <div>
              <div className='AddReq-but'>
                <button className='AddReq-but1'>Save</button>
                <span><button className='AddReq-but2'>+</button><p>Add</p></span>
              </div>

                <div className='AddReq-Pop-Secound-Contant'>
                  <div>
                    <input type="text" /><br />
                  </div>
                  <div>
                    <p>Uplode JD</p><br/>
                    <p>Must Have Skills</p><br/><br/>
                    <p>Busic of Java,redux,React,bla,bla,</p>
                  </div>
                </div>

            </div>
            <div></div>
        </div>
    </div>
  );

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



      <header className='main-header'>
        <div className='logo-right'>
          <img className='logo-img' src={WiseSkull2} alt="" />
          <img className='photo-img ' src={WiseSkull} alt="" />
        </div>
        <div className='secund-part'>

          <div>
            <Popover placement="bottomRight" content={content} trigger="click">
              <button className='second-btn' >Add Requirement</button>
            </Popover>
            <button className='fist-btn' onClick={showModal}  >Log Out</button>

          </div>

          <div className='text-liner'>
            <span><IoIosArrowRoundBack className='icon-Logo' /></span>
            <Link className="Link" to="/dashboard">Dashboard</Link>
            <div className='box-border'></div>
            <Link className="Link" to="/candidate-listing">Go to Candidate Listing</Link>
            <span><IoIosArrowRoundForward className='icon-Logo' /></span>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header