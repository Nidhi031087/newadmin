import React from 'react';

import {FaTv,FaFolder,FaEnvelope, FaRandom,FaSlidersH} from "react-icons/fa";
<i class="far fa-sliders-v"></i>


const Sidebar = () => {
    return (
        <div className="sidebarDiv">
            <div className="iconMainDiv">
            <h6>CIMac</h6>
            <div className="iconDiv"><a href=""><FaRandom /></a></div>
            
           <div className="iconDiv"><a href=""><FaTv /></a> </div>
           <div className="iconDiv"><a href=""><FaFolder/></a></div>
           <div className="iconDiv"><a href="">< FaEnvelope/></a></div>
           <div className="iconDiv"><a href="">< FaSlidersH/></a></div>
           </div>
            
            
        
        </div>
    )
}

export default Sidebar
