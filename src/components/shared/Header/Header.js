import { header, left, right, link, mobile, screen, icon, menu_icon, close_icon, username, acc_holder } from './Header.module.scss'
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

    useEffect(() => {
        console.log(auth)
    }, []);


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
                    auth !== null ?
                        <div className={right}>
                            <Link className={acc_holder} to="/dashboard/profile">
                                <svg className={icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.294 7.29105C17.294 10.2281 14.9391 12.5831 12 12.5831C9.0619 12.5831 6.70601 10.2281 6.70601 7.29105C6.70601 4.35402 9.0619 2 12 2C14.9391 2 17.294 4.35402 17.294 7.29105ZM12 22C7.66237 22 4 21.295 4 18.575C4 15.8539 7.68538 15.1739 12 15.1739C16.3386 15.1739 20 15.8789 20 18.599C20 21.32 16.3146 22 12 22Z"/>
                                </svg>

                                <p 
                                    className={username} 
                                    onClick={() => dispatch(logOutAction())} 
                                >
                                    {auth.name}
                                </p>
                            </Link>

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
