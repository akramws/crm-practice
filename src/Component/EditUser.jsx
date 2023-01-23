import React from 'react'
import './Style/EditUser.css'

const EditUser = () => {
  return (
    <>
     <div className="edit-user-main">
      <div className="edit-section">
        <div className="edit-user-header">
          <p>Edit User</p>
        </div>
        <div className="edit-form-header">
          <form action="" className="editUser-form-body">
            <label htmlFor="uName">User Name</label>
            <br />
            <input type="text" id="uName" />
            <br />

            <label htmlFor="pNumber">Phone Number</label>
            <br />
            <input type="text" id="pNumber" />
            <br />

            <label htmlFor="email">Email ID</label>
            <br />
            <input type="email" id="email" />
            <br />

            <label htmlFor="role">Role</label>
            <br />
            <select id="role">
              <option selected hidden>
                Select
              </option>
              <option>Team Lead</option>
              <option>Admin</option>
              <option>Team Member</option>
            </select>
            <br />

           
            <button>
              <p>Done</p>
            </button>
          </form>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default EditUser