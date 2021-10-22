import styled from "styled-components"
import { Link } from 'react-router-dom'

const Svg = styled.svg`
    fill: #fff;
    height: 2.25em;
    padding: .25em;
    border-radius: 100px;
    cursor: pointer;
    transition: all ease-in-out .3s;
    margin-right: .85em;

    &:hover{
        background: #ffffff40;
    }
`

export default function Fb() {
    return (
        <Link>
            <Svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" />
            </Svg>
        </Link>
    )
}
