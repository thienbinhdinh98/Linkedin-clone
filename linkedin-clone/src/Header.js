import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
function Header() {
    return (
        <div className='header'>
            <div className = "header_left"> 
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt=""/>

                <div className = "header_search">
                    {/*search icon */}
                    <SearchIcon />
                    <input type= "text"/>
                </div>

            </div>

            <div className = "header_right"> 
                <HeaderOption Icon={HomeIcon} title = 'Home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title = 'My Network'/>
                <HeaderOption Icon={BusinessCenterIcon} title = 'Jobs'/>
                <HeaderOption Icon={ChatIcon} title = 'Messaging'/>
                <HeaderOption Icon={NotificationsIcon} title = 'Notifications'/>
                <HeaderOption avatar = "https://cdn.vox-cdn.com/thumbor/zK2yr5O_OgAHScGDw79ot9IFYgo=/0x0:1200x898/1200x800/filters:focal(504x353:696x545)/cdn.vox-cdn.com/uploads/chorus_image/image/67986660/1773382.0.jpg" title = "Frosty"/>
            </div>

        </div>
    )
}

export default Header
