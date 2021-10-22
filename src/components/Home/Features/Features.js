import styled from 'styled-components'
import Title from './components/Title'
import Description from './components/Description'
// import Illustration from './components/Illustration'
// import Button from './components/Button'
import Card from './components/Card'

//
import icon_one from '../../../assets/images/icon_one.png';
import icon_two from '../../../assets/images/icon_two.png';
import icon_thre from '../../../assets/images/icon_thre.png';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 92%;
    margin-left: 4%;
    margin-bottom: 10%;
    margin-top: 5%;
`

const Cards = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: .75em;
`

const Informations = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export default function Features() {

    const data = [
        {
            figure: `${icon_one}`,
            title: 'BUILD QUIZESS',
            description: 'Build quizess of different kinds with our platoform with all the tools you need.'
        },
        {
            figure: `${icon_two}`,
            title: 'SHARE QUIZESS',
            description: 'Quizess that can be played by others are the fun of our platform, share them now.'
        },
        {
            figure: `${icon_thre}`,
            title: 'BROWSE COMMUNITY',
            description: 'Our community of quizess with different categories for you to search and learn.'
        },
    ]

    return (
        <Container>
            <Informations>
                <Title />
                <Description />
            </Informations>
            <Cards>
                {
                    data.map(item => <Card current={item} />)
                }
            </Cards>
        </Container>
    )
}
