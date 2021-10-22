import styled from 'styled-components'

import Illustration from './components/Image'
import Title from './components/Title'
import Description from './components/Description'

import Button from '../../General/Button'

const Container = styled.div`
    display: flex;
    width: 92%;
    margin-left: 4%;
    margin-bottom: 7%;
    justify-content: space-between;
    align-items: center;
    margin-top: 5%;
`

const Right = styled.div`
    width: 50%;
`

const Left = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 2.5em;
`

export default function Community() {
    return (
        <Container>

            <Left>
                <Title />
                <Description />
                <Button text="EXPLORE QUIZESS" background="purple" color="white" />
            </Left>

            <Right>
                <Illustration />
            </Right>

        </Container>
    )
}
