import React from 'react';
import './Style/ManageTeam.css';
import { HiUserGroup } from 'react-icons/hi'
import { MdEdit } from 'react-icons/md'

const ManageTeamRight = () => {
  return (
    <div className='full-body-sec'>
      <div className='right-side-div1'>

        <div className='teams-section'>
          <div className='class-para1'>
            <p>Teams</p>
          </div>
          <ul className='full-li-list'>
            <li>Team Alpha</li>
            <li>Team Beta</li>
            <li>Team Gama</li>
            <li>Team Zeta</li>
            <li>Team Tera</li>
            <li>Team Superman</li>
          </ul>
        </div>
        <hr />
        <div className='class-para'>
          <p>Unassigned Mates</p>
        </div>

        <div className='teams-group'>
          <div className="right-side-group">
            <div className="right-side-sec">
              <div className="right-side-image">
                <div>
                  <img
                    src="http://localhost:3000/img/blank-profile-picture-973460_1280.webp"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="http://localhost:3000/img/blank-profile-picture-973460_1280.webp"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="http://localhost:3000/img/blank-profile-picture-973460_1280.webp"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="http://localhost:3000/img/blank-profile-picture-973460_1280.webp"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="http://localhost:3000/img/blank-profile-picture-973460_1280.webp"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="http://localhost:3000/img/blank-profile-picture-973460_1280.webp"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="http://localhost:3000/img/blank-profile-picture-973460_1280.webp"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="http://localhost:3000/img/blank-profile-picture-973460_1280.webp"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="http://localhost:3000/img/blank-profile-picture-973460_1280.webp"
                    alt=""
                  />
                </div>
              </div>
              <span className="members-total">8 Members</span>
            </div>
          </div>
        </div>
      </div>

      <div className='left-side-div2'>
        <div className='team-edit-div'>
          <div className='group-but-one'><HiUserGroup />Team Alpha<MdEdit /></div>
        </div>
      </div>

    </div>
  )
}

export default ManageTeamRight