import React from 'react'
import "./SideBar.css"
import {Avatar} from "@material-ui/core"

function SideBar() {

    const recentItem = (topic)=>(
        <div className= "sidebar__recentItem">
            <span className = "sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className = "sidebar">
            <div className = "sidebar__top">
                <img src = "https://thumbs.dreamstime.com/b/colorful-powder-explosion-white-background-abstract-pastel-color-dust-particles-splash-152468326.jpg" alt= "" />
                <Avatar className = "sidebar__avatar"/>
                <h2>Frosty</h2>
                <h4>thienbinhdinh98@gmail.com</h4> 
            </div>

            

            <div className = "sidebar__stats">
                <div className = "sidebar__stat">
                    <p>Who viewed you</p>
                    <p className = "sidebar__statNumber">2,543</p>
                </div>

                <div className = "sidebar__stat">
                    <p>Views on post</p>
                    <p className = "sidebar__statNumber">2,543</p>
                </div>
            </div>

            <div className = "sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('redux')}
                {recentItem('Software developer')}
            </div>
        </div>
    )
}

export default SideBar
