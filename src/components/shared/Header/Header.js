import { header, left, right, link, mobile, screen, menu_icon, close_icon } from './Header.module.scss'
import { button_fill, button_faded } from '../Buttons/Buttons.module.scss'
import Links from './Links'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

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

                <div className={right}>
                    <button className={button_faded} styles={{ marginRight: '16px' }}>LOGIN</button>
                    <button className={button_fill}>GET STARTED</button>
                </div>
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
                                <svg class={close_icon} onClick={handleMenu} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.99999 5.58599L11.95 0.635986L13.364 2.04999L8.41399 6.99999L13.364 11.95L11.95 13.364L6.99999 8.41399L2.04999 13.364L0.635986 11.95L5.58599 6.99999L0.635986 2.04999L2.04999 0.635986L6.99999 5.58599Z" />
                                </svg>

                                {Links.map(
                                    item =>
                                        <Link key={item.id} className={link}
                                            to={item.link}>
                                            {item.name}
                                        </Link>
                                )}
                                <Link className={link}
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
