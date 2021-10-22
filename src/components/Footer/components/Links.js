import styled from "styled-components"
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 33.33%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.p`
    font-size: 1.5em;
    color: #fff;
    margin-bottom: .8em;
`

const Item = styled.span`
    font-size: 1.2em;
    font-family: 'Space Grotesk', sans-serif;
    color: #ffffff;
`

const LinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`

export default function Links() {
    return (
        <Container>
            <LinkWrapper>
            <Title>Helpful links</Title>
                <Link className="link-footer" to="#">
                    <Item>Who we are?</Item>
                </Link>

                <Link className="link-footer" to="#">
                    <Item>Terms & Policy</Item>
                </Link>

                <Link className="link-footer" to="#">
                    <Item>Careers</Item>
                </Link>

                <Link className="link-footer" to="#">
                    <Item>Our Team</Item>
                </Link>

                <Link className="link-footer" to="#">
                    <Item>Help Center</Item>
                </Link>
            </LinkWrapper>
        </Container>
    )
}
