import styled from 'styled-components';

const Paragraph = styled.p`
    font-family: 'Space Grotesk', sans-serif;
`

export default function Description() {
    return (
        <Paragraph>
           The page you're looking for was not found or it was removed.
        </Paragraph>
    )
}