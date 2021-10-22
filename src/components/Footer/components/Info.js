import styled from "styled-components"
import Logomania from "../../General/Logomania";
import Fb from "../../General/social-media/Fb";
import Ig from "../../General/social-media/Ig";
import Yt from "../../General/social-media/Yt";
import Tw from "../../General/social-media/Tw";


const Container = styled.div`
    width: 33.33%;
`

const Description = styled.p`
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.2em;
    color: #ffffff;
    margin: 1em 0em;
`

export default function Info() {
    return (
        <Container>
            <Logomania />
            <Description>
                SwiftQuiz is your favorite platform on seeking knowledge by playing quizes of your favorite topic and also having the option for you to do share them with the community.
            </Description>
            <div style={{display: 'flex'}}>
                <Fb />
                <Ig />
                <Tw />
                <Yt />
            </div>
        </Container>
    )
}
