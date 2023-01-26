import React, { useState } from 'react'
import './Style/EditUser.css'

const EditUser = ({userReff, editUserData,setopenEdit}) => {
  const [editedUser, setEdittedUser] = useState({
    userName:editUserData.userName,
    contactNumber:editUserData.contactNumber,
    email:editUserData.email,
    role:editUserData.role
  })

  const [closeUser, setCloseUser] = useState(false);

  const setCloseUserFun = () =>{
    setCloseUser(setopenEdit)
  }

  return (
    <>
     <div className="edit-user-main" ref={userReff}>
      <div className="edit-section">
        <div className="edit-user-header">
          <p>Edit User</p>
        </div>
        <div className="edit-form-header">
          <form action="" className="editUser-form-body">
            <label htmlFor="uName">User Name</label>
            <br />
            <input type="text" id="uName" value={editedUser.userName} onChange={(e) => setEdittedUser({...editedUser, userName: e.target.value})}/>
            <br />
            <label htmlFor="pNumber">Phone Number</label>
            <br />
            <input type="text" id="pNumber" value={editedUser.contactNumber} onChange={(e)=> setEdittedUser({...editedUser, contactNumber:e.target.value})}/>
            <br />
            <label htmlFor="email">Email ID</label>
            <br />
            <input type="email" id="email" value={editedUser.email} onChange={(a)=> setEdittedUser({...editedUser, email:a.target.value})}/>
            <br />

            <label htmlFor="role">Role</label>
            <br />
            <select id="role" value={editedUser.role} onChange={(a)=> setEdittedUser({...editedUser,role:a.target.value})}>
              <option selected hidden>
                Select
              </option>
              <option>Team Lead</option>
              <option>Admin</option>
              <option>Team Member</option>
            </select>
            <br />

           
            <button onClick={setCloseUserFun}>
              Done
            </button>
          </form>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default EditUser