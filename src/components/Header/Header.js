import styled from 'styled-components';
import Logo from './components/Logo'
import Button_Faded from './components/Button_Faded';
import Button from './components/Button';
import Logomania from './components/Logomania';

const Wrapper = styled.div`
    width: 100%;
    background: #5928E5;
    position: fixed;
    top: 0; right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;

`

const Container = styled.div`
    width: 92%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 0em;
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
        name: 'PLAY WITH A CODE',
        link: '/play-with-a-code'
    },
    {
        name: 'HOW TO PLAY',
        link: '/how-to-play'
    },
    {
        name: 'ABOUT US',
        link: '/about-us'
    },
    {
        name: 'GET IN TOUCH',
        link: '/contact'
    }
]

export default function Header() {
    return (
        <Wrapper>
            <Container>
                <Left>
                    <Logomania />
                    {
                        MenuItems.map(item => <MenuItem href={item.link}>{item.name}</MenuItem>)
                    }
                </Left>

                <Right>
                    <Button_Faded />

                    <Button />
                </Right>
            </Container>
        </Wrapper>
    )
}