import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header =()=>{
    return(
        <div className="grid grid-flow-col p-5 shadow-md">
            <div className="flex col-span-1">
                <img className="h-8"
                    src="https://cdn-icons-png.flaticon.com/512/3388/3388823.png"
                    alt="menu"></img>
                <img className="h-8 mx-2"
                    src="https://w7.pngwing.com/pngs/674/324/png-transparent-youtube-logo-music-video-computer-icons-youtube-logo-text-trademark-logo.png" 
                    alt="logo"></img>
            </div>
            <div className="col-span-10 text-center ">
                <input className="w-1/2 border border-gray-300 p-2 px-4 rounded-l-full" type="text" placeholder='Search'></input>
                <button className="border border-gray-300 px-5 py-2 rounded-r-full bg-slate-50">
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass"  className="text-slate-500"/>
                </button>
            </div>
            <div className="col-span-1">
                <img className="h-8"
                    src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"
                    alt="user"></img>
            </div>
        </div>
    )
}
export default Header