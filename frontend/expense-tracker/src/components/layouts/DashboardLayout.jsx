import React from 'react';
import {UserContext}from "../../context/UserContext";
import Navbar from "./Navbar";
const DashboardLayout=({children,activemenu})
    const{user}=useContext
    return(
        <div className="">
        <Navbar activeMenu={activeMenu}/>
        {user && (
            <div className="flex">
            <div className="max-[1080px]:hidden">
            <SideMenu activeMenu={activeMenu}/>
            </div>
            <div className="grow mx-5">{children}</div>
            </div>
        )
        }
        </div>
    );
export default DashboardLayout