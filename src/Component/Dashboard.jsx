import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./Style/Dashboard.css";

const Dashboard = () => {
const [dailyUpdate, setDailyUpdate] = useState("")
const [weeklyUpdate, setWeeklyUpdate] = useState("")
const [monthlyUpdate, setMonthlyUpdate] = useState("")

const dailyTrackerFuc = (event) => {
  setDailyUpdate(event)
}

const weeklyTrackerFuc = (event) => {
  setWeeklyUpdate(event)

}

const monthlyTrackerFun = (event) => {
  setMonthlyUpdate(event)

}

  return (
    <>
      <div className="crm-dashboard">
        <div className="crm-main-dashboard">
          <div className="crm-dashboard-header">
            <div className="crm-dashboard-header-detail">
              <p>Candidates' Detail Management</p>
            </div>
          </div>

          <div className="crm-dashboard-body-content">
            <div className="crm-body-content-leftside-div">
              <div className="crm-body-content-leftside-div-first-child">
                <div className="leftside-div-first-child-upper-div">
                  <div className="leftside-div-first-child-container">
                    <div className="show-button">
                      <p>Recruiter's Activity</p>
                      <div className="buttons">
                        <button onClick={() => dailyTrackerFuc("daily")} className={dailyUpdate === "daily" ? "active" : ''} >Daily</button>
                        <button onClick={() => dailyTrackerFuc("weekly")} className={dailyUpdate === "weekly" ? "active" : ''}>Weekly</button>
                        <button onClick={() => dailyTrackerFuc("monthly")} className={dailyUpdate === "monthly" ? "active" : ''}>Monthly</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="leftside-div-first-child-lower-div">
                  <div className="show-button">
                    <p>Requirements</p>
                    <div className="buttons">
                    <button onClick={() => weeklyTrackerFuc("daily")} className={weeklyUpdate === "daily" ? "active" : ''} >Daily</button>
                        <button onClick={() => weeklyTrackerFuc("weekly")} className={weeklyUpdate === "weekly" ? "active" : ''}>Weekly</button>
                        <button onClick={() => weeklyTrackerFuc("monthly")} className={weeklyUpdate === "monthly" ? "active" : ''}>Monthly</button>
                    </div>
                  </div>
                  <div className="left-lowerside-requirements">
                    <h1>17</h1>
                    <p>Requirements</p>
                    <p>Today</p>
                  </div>
                </div>
              </div>

              <div className="crm-body-content-leftside-div-secound-child">
                <div className="show-button">
                  <p>Total Submissions</p>
                  <div className="buttons">
                  <button onClick={() => monthlyTrackerFun("daily")} className={monthlyUpdate === "daily" ? "active" : ''} >Daily</button>
                        <button onClick={() => monthlyTrackerFun("weekly")} className={monthlyUpdate === "weekly" ? "active" : ''}>Weekly</button>
                        <button onClick={() => monthlyTrackerFun("monthly")} className={monthlyUpdate === "monthly" ? "active" : ''}>Monthly</button>
                  </div>
                </div>
                <div className="top-5-recruiters-in-the-list-div">
                  <div className="total-submissions-div">
                    <h1>58</h1>
                    <p>Submissions</p>
                    <p>Today</p>
                  </div>
                  <button>Top 5 Recruiters in the list</button>
                  <div className="result-of-5-recruiters">
                    <div className="list-of-top-5-recruiters">
                      <ul>
                        <li>1) Vijay Tade</li>
                        <li>2) Moin Banani</li>
                        <li>3) Pooja Ghagada</li>
                        <li>4) Taukir Pathan</li>
                        <li>5) Sameer Desai</li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li>15</li>
                        <li>13</li>
                        <li>11</li>
                        <li>10</li>
                        <li>05</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="crm-body-content-rightside-div">
              <div className="right-side-div-child-holder">
                <div className="rightside-div-first-child-upper">
                  <p>Manage User</p>
                  <div className="upper-child-image-holder">
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
                    <span className="upper-child-members-inline-div">9 Members</span>
                </div>

                <div className="rightside-div-secound-child-lower">
                  <p>Manage Teams</p>
                  <div className="manage-teams-list-div">
                    <div>
                      <img
                        src="http://localhost:3000/img/blank-profile-picture-973460_1280.webp"
                        alt=""
                      />
                      <span>Team Alpha</span>
                    </div>
                    <div>
                      <img
                        src="http://localhost:3000/img/blank-profile-picture-973460_1280.webp"
                        alt=""
                      />
                      <span>Team Beta</span>
                    </div>
                    <div>
                      <img
                        src="http://localhost:3000/img/blank-profile-picture-973460_1280.webp"
                        alt=""
                      />
                      <span>Team Gama</span>
                    </div>
                    <div>
                      <img
                        src="http://localhost:3000/img/blank-profile-picture-973460_1280.webp"
                        alt=""
                      />
                      <span>Team Zeta</span>
                    </div>
                    <div>
                      <img
                        src="http://localhost:3000/img/blank-profile-picture-973460_1280.webp"
                        alt=""
                      />
                      <span>Team Tera</span>
                    </div>
                    <div>
                      <img
                        src="http://localhost:3000/img/blank-profile-picture-973460_1280.webp"
                        alt=""
                      />
                      <span>Team Superman</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sidebar />
    </>
  );
};

export default Dashboard;
