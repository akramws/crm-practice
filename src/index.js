import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<App />} />
        <Route path="/form" element={<App />} />
        <Route path="/candidate-listing" element={<App />} />
        <Route path="/user-management" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);