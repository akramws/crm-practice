import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import App from "./App";
import Header from "./Component/Header";
import Candidate from "./Component/Candidate";
import CandidateForm from "./Component/CandidateForm";
export default function Index() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/login" element={<App />} />
        <Route path="/form" element={<CandidateForm />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/form" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);