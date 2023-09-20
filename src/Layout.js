import React, { useState } from 'react';
import Sidebar from "./components/SideBar"




export default function Layout({children, DarkMode, toggleMode}){
    return (
        <div id='site'>
           <Sidebar DarkMode={DarkMode} toggleMode={toggleMode}></Sidebar>
           <div id='page'>{children}</div>
        </div>
    )
}
