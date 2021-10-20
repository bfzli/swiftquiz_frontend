import styled from 'styled-components'
import Title from './components/Title'
import Description from './components/Description'
// import Illustration from './components/Illustration'
// import Button from './components/Button'

const Container = styled.div`
    display: flex;
    position: relative;
    margin-top: 1em;
    width: 92%;
    margin-left: 4%;
`

const Left = styled.div`
    height: 100vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: .75em;
`

const Right = styled.div`
    height: 100vh;
    width: 50%;
    display: flex;
    align-items: flex-end;
    position: relative;
`

export default function Features() {
    return (
        <Container>
                <Left>
                    <Title />
                    <Description />
                    {/* <Button /> */}
                </Left>
        </Container>
    )
}
