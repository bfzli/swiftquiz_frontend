import {header, left, right, link} from './Header.module.scss'
import {button_fill, button_faded} from '../Buttons/Buttons.module.scss'
import Links from './Links'
import Logo from './Logo'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
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
                <button className={button_faded} styles={{marginRight: '16px'}}>LOGIN</button>
                <Link to="/register"><button className={button_fill}>GET STARTED</button></Link>
            </div>
        </header>
    )
}
