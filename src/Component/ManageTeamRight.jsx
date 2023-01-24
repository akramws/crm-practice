import React from 'react';
import './Style/ManageTeam.css';
import { HiUserGroup } from 'react-icons/hi'

const ManageTeamRight = () => {
  return (
    <div>

      <div>

        <div className='main-teams-div'>
          <span className='teams-head'>Teams</span>
          <ul className='teams-full-list'>
            <li>Team Alpha</li>
            <li>Team Beta</li>
            <li>Team Gama</li>
            <li>Team Zeta</li>
            <li>Team Tera</li>
            <li>Team Superman</li>
          </ul>
        </div>

        <div>
          <p>Unassigned Mates</p>
        </div>
        
      </div>

      <div>
        <p><HiUserGroup/>Team Alpha</p>
        <p>Mates</p>
      </div>

    </div>
  )
}

export default ManageTeamRight