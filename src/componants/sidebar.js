import React from "react";
import "../App.css"
import { Link } from "react-router-dom";
import "./sidebar.css"



export const Sidebar = ()=>{
    return  <div className="sidebar">
        
            <Link to="/">Home</Link>
            <Link to="/student">Student</Link>
            <Link to="/mentor">Teacher</Link>
            
           </div>
        
     
}