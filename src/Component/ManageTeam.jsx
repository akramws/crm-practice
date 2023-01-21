import React from 'react';
import './Style/ManageTeam.css';
import { RxCross2 } from "react-icons/rx";

const ManageTeam = () => {
  return (
    
    <div className='manageteam-main-div'>
        <div>
            <div className='manage-team-parant-div'> 
                <div className='manageteam-head'>Manage Teams</div>
                <div className='head-but-div'>
                <button className='head-btn'>Creat Team</button>
                <span className='head-btn-X'><RxCross2/></span>
                </div>
            </div>
        </div>
        <div className='manage-contant-main-div'>
            <div className='content-div1'>
                <span>Team</span><br /><br />
                <span className='team-alpha-underline'>Team Alpha</span>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </div>
            <div className='content-div2'>
            <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </div>
        </div>
    </div>
  )
}

export default ManageTeam