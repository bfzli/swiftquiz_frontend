import styled from "styled-components"

const Item = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Figure = styled.img`
    width: 60%;
`

const Title = styled.div`
    font-size: 1.65em;
    color: #5928E5;
    margin-bottom: .2em;
`

const Paragraph = styled.div`
    font-size: 1.2em;
    font-family: 'Space Grotesk', sans-serif;
    text-align: center;
`

export default function Card({current}) {
    return (
        <Item>
            <Figure src={current.figure} alt={current.title} />

            <Title>
                {current.title}
            </Title>

            <Paragraph>
                {current.description}
            </Paragraph>
        </Item>
    )
}
