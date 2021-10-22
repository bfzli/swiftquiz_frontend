import styled from "styled-components"

const Text = styled.p`
    width: 80%;
    font-size: 1.2em;
    font-family: 'Space Grotesk', sans-serif;
    margin: .6em 0em .9em 0em;
`

export default function Description() {
    return (
        <Text>
            The best of our platform is that we have our own community of quizes from different categories that you can chose to play from. You can post yours there and help to the community of knowledge to grow.
        </Text>
    )
}
