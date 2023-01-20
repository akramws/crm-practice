import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import App from "./App";
import Header from "./Component/Header";
import Candidate from "./Component/Candidate";
import UserManagement from "./Component/UserManagement";
import Dashboard from "./Component/Dashboard";
import CandidateForm from "./Component/CandidateForm";
import LoginPage from "./Component/LoginPage";
export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<App />} /> */}
        <Route path="/candidate-listing" element={<Candidate />} />
        <Route path="/user-management" element={<>
          <Header />
          <UserManagement />
        </>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<>
          <Header />
          <Dashboard />
        </>
        } />
        <Route path="/form" element={<CandidateForm />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);