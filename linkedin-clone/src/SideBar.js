import React from 'react'
import "./SideBar.css"
import {Avatar} from "@material-ui/core"

function SideBar() {
    return (
        <div className = "sidebar">
            <div className = "sidebar__top">
                <img src = "" alt= "" />
                <Avatar className = "sidebar__avatar"/>
                <h2>Frosty</h2>
                <h4>thienbinhdinh98@gmail.com</h4> 
            </div>

            

            <div clasName = "sidebar__stats">
                <div clasName = "sidebar__stat">
                    <p>Who viewed you</p>
                    <p className = "sidebar__statNumber">1</p>
                </div>

                <div clasName = "sidebar__stat">
                    <p>Views on post</p>
                    <p className = "sidebar__statNumber">1</p>
                </div>
            </div>

            <div className = "sidebar__bottom">
                <p>Recent</p>
                
            </div>
        </div>
    )
}

export default SideBar
