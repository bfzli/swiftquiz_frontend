import styled from 'styled-components'
import Info from './components/Info'
import Links from './components/Links'
import Media from './components/Media'

const WrapperFull = styled.div`
    width: 100%;
    background: #5928E5;
    padding-top: 2.5em;
`

const Container = styled.div`
    width: 92%;
    margin-left: 4%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 1em;
`

const End = styled.div`
    display: flex;
    border-top: 1px solid #ffffff10;
    justify-content: center;
    padding: .75em 0em;
    align-items: center;
`

const Copyright = styled.p`
    font-size: 1.2;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #ffffff;
`

export default function Footer() {
    return (
        <WrapperFull>
            <Container>
                <Info />
                <Links />
                <Media />
            </Container>
            <End>
                <Copyright>SwfitQuiz &copy; All rights Reserved</Copyright>
            </End>
        </WrapperFull>
    )
}
