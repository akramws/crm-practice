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
import UnderbarPopup from "./Component/UnderbarPopup";
import SearchbarPopup from "./Component/SearchbarPopup";
import EditUser from "./Component/EditUser";
import AddMates from "./Component/AddMates";
export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<App />} /> */}
        <Route path="/candidate-listing" element={<Candidate />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user" element={<EditUser />} />
        <Route path="/user-management" element={<>
          <Header />
          <UserManagement />
          <Sidebar />
        </>} />
        <Route path="/" index element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<>
          <Header />
          <Dashboard />
        </>
        } />
        <Route path="/form" element={<DetailForm />} />
        <Route path="/add-mates" element={<AddMates/>} />
        <Route path="/right-side-box" element={<RightSideBox />} />
        <Route path="/manage-team" element={<> <Header/> <ManageTeam/></>} />
        <Route path="/underbar-popup" element={<UnderbarPopup />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);