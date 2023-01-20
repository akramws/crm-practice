import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import App from "./App";
import Header from "./Component/Header";
import Candidate from "./Component/Candidate";
import Usermanagement from "./Component/Usermanagement";
import Dashboard from "./Component/Dashboard";
import Candidateform from "./Component/Candidateform";
import LoginPage from "./Component/LoginPage";
export default function Index() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        {/* <Route path="/login" element={<App />} /> */}
        <Route path="/form" element={<App />} />
        <Route path="/candidate-listing" element={<Candidate/>} />
        <Route path="/user-management" element={<Usermanagement />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/form" element={<Candidateform />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/form" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);