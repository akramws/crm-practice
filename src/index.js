import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Header from "./Component/Header";
import Candidate from "./Component/Candidate";
import UserManagement from "./Component/Usermanagement";
import Dashboard from "./Component/Dashboard";
import LoginPage from "./Component/LoginPage";
import DetailForm from "./Component/DetailForm";
import AddUser from "./Component/AddUser";
import Sidebar from "./Component/Sidebar";
import RightSideBox from "./Component/RightSideBox";
import ManageTeam from "./Component/ManageTeam";
export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<App />} /> */}
        <Route path="/candidate-listing" element={<Candidate />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/user-management" element={<>
          <Header />
          <UserManagement />
          <Sidebar />
        </>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<>
          <Header />
          <Dashboard />
        </>
        } />
        <Route path="/form" element={<DetailForm />} />
        <Route path="/right-side-box" element={<RightSideBox />} />
        <Route path="/ManageTeam" element={<ManageTeam />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);