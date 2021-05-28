import './sidebar.css'

export const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className='sidebarTitle'>ABOUT ME</span>
                <img src='https://media-exp1.licdn.com/dms/image/C4E03AQGtbZmcn9V-hA/profile-displayphoto-shrink_200_200/0/1603991637585?e=1626307200&v=beta&t=c05A8PxfyJOnC3ZqkQ7dOHrGKI_1nUrrRwU3Mv21Ngo'

                alt=''
                />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Et ullam fugiat facere vitae.</p>
            </div>
            <div className="sidebarItem">
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className='sidebarList'>
                    <li className='sidebarListItem' >LIFE</li>
                    <li className='sidebarListItem' >MUSIC</li>
                    <li className='sidebarListItem' >STYLE</li>
                    <li className='sidebarListItem' >SPORT</li>
                    <li className='sidebarListItem' >TECH</li>
                    <li className='sidebarListItem' >CHINEMA</li>
                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className='sidebarSocial'>
                    <i className="sidebarIcon fab fa-facebook"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-github"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
