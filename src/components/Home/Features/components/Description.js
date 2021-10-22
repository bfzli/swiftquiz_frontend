import styled from 'styled-components';

const Paragraph = styled.p`
    width: 50%;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.25em;
    margin-top: .25em;
    text-align: center;
    margin-bottom: 1.25em;
`

export default function Description() {
    return (
        <Paragraph>
           We offer different services for your knoweldge seekers, those are they key ones that will help through your journey more.
        </Paragraph>
    )
}