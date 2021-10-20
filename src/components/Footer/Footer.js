import styled from 'styled-components'
import Title from './components/Title'
// import Description from './components/Description'
// import Illustration from './components/Illustration'
import Button from './components/Button'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, rgba(89, 40, 229, 0.54) 0%, #5928E5 74.48%); 
`

const Footer_Hero = styled.div`
    padding: 5% 0em;
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Footer_End = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-align: center;
`

const End_Left = styled.div``
const End_Center = styled.div``
const End_Right = styled.div``


export default function Footer() {
    return (
        <Container>
            <Footer_Hero>
                <Title />
                <Button />
            </Footer_Hero>

            <Footer_End>
                <End_Left>
                    a
                </End_Left>

                <End_Center>
                    a
                </End_Center>

                <End_Right>
                    a
                </End_Right>
            </Footer_End>
        </Container>
    )
}
