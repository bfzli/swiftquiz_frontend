import { header, left, right, link, mobile, screen, icon, menu_icon, close_icon, username, acc_holder } from './Header.module.scss'
import { button_fill, button_faded } from '../Buttons/Buttons.module.scss'
import Links from './Links'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [acc, setAcc] = useState(JSON.parse(localStorage.getItem('user')) || null)

    const handleMenu = () => {
        setIsOpen(!isOpen)
    }

    const auth = useSelector((state) => state.auth.auth.username)



    useEffect(() => {
        console.log(auth)
    }, [])


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
                    acc !== null ?
                        <div className={right}>
                            <Link className={acc_holder} to="/dashboard/profile">
                                <svg className={icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.294 7.29105C17.294 10.2281 14.9391 12.5831 12 12.5831C9.0619 12.5831 6.70601 10.2281 6.70601 7.29105C6.70601 4.35402 9.0619 2 12 2C14.9391 2 17.294 4.35402 17.294 7.29105ZM12 22C7.66237 22 4 21.295 4 18.575C4 15.8539 7.68538 15.1739 12 15.1739C16.3386 15.1739 20 15.8789 20 18.599C20 21.32 16.3146 22 12 22Z" />
                                </svg>

                                <p style={{marginRight: '1.25em'}} className={username}>{acc.username}</p>

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" d="M7.29617 6.446C7.29617 3.995 9.35597 2 11.8876 2H16.9199C19.4454 2 21.5 3.99 21.5 6.436V17.552C21.5 20.004 19.4412 22 16.9096 22H11.8773C9.35184 22 7.29617 20.009 7.29617 17.562V16.622V6.446Z" fill="white" />
                                    <path d="M16.0374 11.4538L13.0695 8.5448C12.7627 8.2448 12.2691 8.2448 11.9634 8.5468C11.6587 8.8488 11.6597 9.3358 11.9654 9.6358L13.5905 11.2288H3.2821C2.85042 11.2288 2.5 11.5738 2.5 11.9998C2.5 12.4248 2.85042 12.7688 3.2821 12.7688H13.5905L11.9654 14.3628C11.6597 14.6628 11.6587 15.1498 11.9634 15.4518C12.1168 15.6028 12.3168 15.6788 12.518 15.6788C12.717 15.6788 12.9171 15.6028 13.0695 15.4538L16.0374 12.5448C16.1847 12.3998 16.268 12.2038 16.268 11.9998C16.268 11.7948 16.1847 11.5988 16.0374 11.4538Z" fill="white" />
                                </svg>
                                <p onClick={()=> {
                                    localStorage.removeItem('user_id');
                                    localStorage.removeItem('user_token');
                                    localStorage.removeItem('user');
                                }} className={username}>Logout</p>

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
