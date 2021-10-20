import styled from 'styled-components';

const Paragraph = styled.p`
    width: 80%;
    font-size: 1.2em;
    font-family: 'Space Grotesk', sans-serif;
    color: #fff;
    margin: .6em 0em .9em 0em;
`

export default function Description() {
    return (
        <Paragraph>
            With our platform learning is awesome and fun with community made quizes of different fields.
        </Paragraph>
    )
}