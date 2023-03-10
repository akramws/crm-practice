import React from 'react';
import './Style/ManageTeam.css';
import { RxCross2 } from "react-icons/rx";
import { Popover } from 'antd';
import UnderbarPopup from './UnderbarPopup';
import ManageTeamRight from './ManageTeamRight';

const ManageTeam = () => {
  return (
    <>
    
            <div className='manage-team-parant-div'> 
                <div className='manageteam-head'>Manage Teams</div>
                <div className='head-but-div'>

              <Popover placement='bottomRight' content={<UnderbarPopup/>} trigger='click'>  
                <button className='head-btn'>Create Team</button>
                </Popover>
                <span className='head-btn-X'><RxCross2/></span>
                </div>
            </div>

              
              <div>
              <ManageTeamRight/>

              </div>

              
            </>  
        
  )
    
}

export default ManageTeam