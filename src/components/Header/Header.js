import styled from 'styled-components';
import Logo from './components/Logo'
import Button_Faded from './components/Button_Faded';
import Button from './components/Button';
import Logomania from './components/Logomania';

const Wrapper = styled.div`
    width: 100%;
    margin-top: 1em;
    width: 92%;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0; right: 4%;
    z-index: 10;
    padding: 1em;
    background: #5928E5;
    border-radius: 1em;
`

const Left = styled.div`
    display: flex;
    align-items: center;
`

const Right = styled.div`
    display: flex;
    align-items: center;
`

const MenuItem = styled.a`
    font-size: 1em;
    color: #fff;
    margin-right: 1rem;
    transition: all ease-in-out .3s;

    &:hover{
        letter-spacing: 3px;
    }
`

const MenuItems = [
    {
        name: 'CATEGORIES',
        link: '/ctg'
    },
    {
        name: 'PLAY WITH A CODE',
        link: '/about'
    },
    {
        name: 'COMMUNITY',
        link: '/how-to-play'
    },
    {
        name: 'GET IN TOUCH',
        link: '/contact'
    },
    {
        name: 'ABOUT US',
        link: '/contact'
    }
]

export default function Header() {
    return (
        <Wrapper>
            <Left>
                <Logomania />
                {
                    MenuItems.map(item => <MenuItem a={item.link}>{item.name}</MenuItem>)
                }
            </Left>

            <Right>
                <Button_Faded />

                <Button />
            </Right>
        </Wrapper>
    )
}