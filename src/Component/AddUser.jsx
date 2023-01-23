import React from "react";
import "./Style/AddUser.css";

const AddUser = ({userReff}) => {
  return (
    <div className="add-user-section" ref={userReff}>
      <div className="add-user-main-section">
        <div className="add-user-header">
          <p>Add User</p>
        </div>
        <div className="add-user-form-header">
          <form action="" className="add-user-form-body">
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

            <label htmlFor="password">Password</label>
            <br />
            <input type="password" id="password" />
            <br />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <br />
            <input type="password" id="confirmPassword" />
            <br />

            <button>
              <p>Submit</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
