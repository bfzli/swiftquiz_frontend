import styled from 'styled-components'

import Illustration from './components/Image'
import Title from './components/Title'
import Description from './components/Description'


import Button from '../../General/Button'

const Container = styled.div`
    display: flex;
    margin-top: 1em;
    width: 92%;
    margin-left: 4%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 7%;
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

export default function Make() {
    return (
        <Container>

            <Right>
                <Illustration />
            </Right>

            <Left>
                <Title />
                <Description />
                <Button text="GET STARTED NOW" bg="purple" color="white" />
            </Left>

        </Container>
    )
}
