import React from 'react';
import './Style/ManageTeam.css';
import { HiUserGroup,HiPlusCircle } from 'react-icons/hi'
import { MdEdit } from 'react-icons/md'
import { FaTrash } from 'react-icons/fa'
import { Popover } from 'antd';
import AddMates from './AddMates';

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

          <div className='group-but-one'>
            <HiUserGroup className='group-but-icon' />
            Team Alpha
          </div>

          <div className='edit-but-icon'>
            <MdEdit className='edit-ic' />
          </div>

          <div className='teams-delete-but'>
            <button className='trash-ico'><FaTrash className='trash-but' /> Delete Team</button>
          </div>
        </div>

        <div className='mates-all'>
            <p>Mates</p>
          <div className='add-mates'>
            <button className='add-btn-puls'><HiPlusCircle className='plus-icon'/>Add Mates</button>
            <button className='delete-mates-but'><FaTrash className='delete-ic'/>Delete Mates</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ManageTeamRight