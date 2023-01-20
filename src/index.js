import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LoginPage from "./Component/LoginPage";

import Candidate from "./Component/Candidate";
import Dashboard from "./Component/Dashboard";
import Header from "./Component/Header";
export default function Index() {
  return (
    <BrowserRouter>
        <Header/>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/form" element={<Candidate />} />
        <Route path="/candidate-listing" element={<App />} />
        <Route path="/user-management" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);