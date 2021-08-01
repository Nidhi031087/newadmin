import React from 'react'
import Reports from '../Reports/index'
import Sidebar from '../Sidebar'
import User from '../User'


const Layout = () => {
    return (
        
             <div className="mainDiv">
           <Sidebar></Sidebar>
            <User></User>
            <div className="settingsDiv"></div>
            <div className="calanderDiv"></div>
            <Reports></Reports>
            <div className="monitoring"></div>
            <div className="otherFunction"></div>
          
        
        </div>
        
    )
}

export default Layout
