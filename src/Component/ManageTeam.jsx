import React from 'react';
import './Style/ManageTeam.css';
import { RxCross2 } from "react-icons/rx";
import ManageTeamRight from './ManageTeamRight';

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
            <div className='manage-team-body-div'>
            <ManageTeamRight/>
            </div>
        </div>
    </div>
  )
}

export default ManageTeam