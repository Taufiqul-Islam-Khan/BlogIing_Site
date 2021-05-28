import './topbar.css'

export const TopBar = () => {
    return (
        <div className='top'>
            <div className='topLeft'>
                <i className="topLeftIcon fab fa-facebook"></i>
                <i className="topLeftIcon fab fa-twitter-square"></i>
                <i className="topLeftIcon fab fa-github"></i>
                <i className="topLeftIcon fab fa-instagram-square"></i>
                </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'>HOME</li>
                    <li className='topListItem'>ABOUT</li>
                    <li className='topListItem'>CONTACT</li>
                    <li className='topListItem'>WRITE</li>
                    <li className='topListItem'>LOGOUT</li>
                </ul>
            </div>
            <div className='topRight'>
                <img className='topImage'
                src='https://media-exp1.licdn.com/dms/image/C4E03AQGtbZmcn9V-hA/profile-displayphoto-shrink_200_200/0/1603991637585?e=1626307200&v=beta&t=c05A8PxfyJOnC3ZqkQ7dOHrGKI_1nUrrRwU3Mv21Ngo'
                alt=""
                />

                <i className="topRightSearch fas fa-search"></i>
            </div>
            
        </div>
    )
}
