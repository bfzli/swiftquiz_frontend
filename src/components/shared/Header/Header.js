import { header, left, right, link, single_action, mobile, screen, icon, menu_icon, close_icon, username, acc_holder } from './Header.module.scss'
import { button_fill, button_faded } from '../Buttons/Buttons.module.scss'
import Links from './Links'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { logOutAction } from '../../../reduxComponents/actions/Auth';


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth.auth);

    const handleMenu = () => {
        setIsOpen(!isOpen)
    }



    return (
        <div data-aos="fade-down">
            <header className={header}>
                <div className={left}>
                    <Logo />
                    {
                        Links.map(
                            item =>
                                <Link key={item.id} className={link}
                                    to={item.link}>
                                    {item.name}
                                </Link>
                        )
                    }
                </div>
                {
                    auth.token !== undefined ?
                        <div className={right}>
                            <div className={acc_holder} to="/dashboard/profile">
                                <div className={single_action}>

                                    <svg className={icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.294 7.29105C17.294 10.2281 14.9391 12.5831 12 12.5831C9.0619 12.5831 6.70601 10.2281 6.70601 7.29105C6.70601 4.35402 9.0619 2 12 2C14.9391 2 17.294 4.35402 17.294 7.29105ZM12 22C7.66237 22 4 21.295 4 18.575C4 15.8539 7.68538 15.1739 12 15.1739C16.3386 15.1739 20 15.8789 20 18.599C20 21.32 16.3146 22 12 22Z" />
                                    </svg>

                                    <Link to="/dashboard/profile">
                                        <p  className={username}>
                                            {auth.name}
                                        </p>
                                    </Link>
                                </div>

                                <div onClick={() => dispatch(logOutAction())} className={single_action}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4" d="M2 6.447C2 3.996 4.03024 2 6.52453 2H11.4856C13.9748 2 16 3.99 16 6.437V17.553C16 20.005 13.9698 22 11.4744 22H6.51537C4.02515 22 2 20.01 2 17.563V16.623V6.447Z" fill="white" />
                                        <path d="M21.7789 11.4548L18.9331 8.5458C18.639 8.2458 18.1657 8.2458 17.8725 8.5478C17.5803 8.8498 17.5813 9.3368 17.8745 9.6368L19.4337 11.2298H17.9387H9.54844C9.13452 11.2298 8.79852 11.5748 8.79852 11.9998C8.79852 12.4258 9.13452 12.7698 9.54844 12.7698H19.4337L17.8745 14.3628C17.5813 14.6628 17.5803 15.1498 17.8725 15.4518C18.0196 15.6028 18.2114 15.6788 18.4043 15.6788C18.5952 15.6788 18.787 15.6028 18.9331 15.4538L21.7789 12.5458C21.9201 12.4008 22 12.2048 22 11.9998C22 11.7958 21.9201 11.5998 21.7789 11.4548Z" fill="white" />
                                    </svg>

                                    <p className={username}>
                                        Logout
                                    </p>
                                </div>

                            </div>

                            <Link to="/dashboard">
                                <button styles={{ marginLeft: '16px' }} className={button_fill}>Go To Dashboard</button>
                            </Link>
                        </div>

                        :

                        <div className={right}>
                            <Link to="/auth">
                                <button className={button_faded} styles={{ marginRight: '16px' }}>LOGIN</button>
                            </Link>

                            <Link to="/auth">
                                <button className={button_fill}>GET STARTED</button>
                            </Link>
                        </div>
                }

            </header>




            <header className={mobile}>
                <div className={left}>
                    <Logo />
                </div>

                <div className={right}>
                    {
                        isOpen === false ?
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <button className={button_fill}>GET STARTED</button>

                                <svg onClick={handleMenu} className={menu_icon} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 0.5H0.5V1V3V3.5H1H19H19.5V3V1V0.5H19H1ZM7 7.5H6.5V8V10V10.5H7H19H19.5V10V8V7.5H19H7ZM1 14.5H0.5V15V17V17.5H1H19H19.5V17V15V14.5H19H1Z" />
                                </svg>

                            </div>
                            :
                            <div className={screen}>
                                <svg className={close_icon} onClick={handleMenu} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.99999 5.58599L11.95 0.635986L13.364 2.04999L8.41399 6.99999L13.364 11.95L11.95 13.364L6.99999 8.41399L2.04999 13.364L0.635986 11.95L5.58599 6.99999L0.635986 2.04999L2.04999 0.635986L6.99999 5.58599Z" />
                                </svg>

                                {Links.map(
                                    item =>
                                        <Link key={item.id} className={link}
                                            to={item.link}>
                                            {item.name}
                                        </Link>
                                )}
                                <Link to="/auth" className={link}
                                    to="/login">
                                    LOGIN
                                </Link>
                            </div>
                    }
                </div>
            </header>

        </div>
    )
}
