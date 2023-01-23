import React from 'react'
import { useNavigate } from 'react-router-dom';
import vertImg from "../assets/images/vert.png"
import "./Style/Sidebar.css";



const Sidebar = () => {

  const Navigate = useNavigate();
  return (
    <div className="left-side-wiseskulls-logo">
      <img src={vertImg} alt="" onClick={() => { Navigate("/dashboard") }}/>
    </div>
  )
}

export default Sidebar