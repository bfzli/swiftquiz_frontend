import styled from "styled-components"
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 33.33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Saver = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`

const Title = styled.p`
    font-size: 1.5em;
    color: #fff;
    margin-bottom: .8em;
`

const ItemWrapper = styled.div`
    display: flex;
    margin-bottom: 1em;
`

const ItemTitle = styled.p`
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.15em;
    color: #ffffff;
    font-weight: 400;

`

const ItemIcon = styled.svg`
    fill: #fff;
    height: 1.65em;
    margin-right: 1em;
`

const LinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    width: 100%;
    font-size: 1.15em;
    padding: .65em .75em;
    border-radius: 1em;
    border: 0;
    font-family: 'Space Grotesk', sans-serif;
`

export default function Media() {
    return (
        <Container>
            <Saver>
                <LinkWrapper style={{ marginBottom: '1.5em' }}>
                    <Title>Newsletter</Title>
                    <Input placeholder="Email Address" />
                </LinkWrapper>
                <LinkWrapper style={{ display: 'flex', flexDirection: 'column' }}>
                    <Title>Get in Touch</Title>
                    <a href="mailto:support@swiftquiz.com">
                        <ItemWrapper>
                            <ItemIcon viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.945838 7.31504C0.423838 7.14104 0.418838 6.86004 0.955838 6.68104L20.0428 0.31904C20.5718 0.14304 20.8748 0.43904 20.7268 0.95704L15.2728 20.043C15.1228 20.572 14.8178 20.59 14.5938 20.088L10.9998 12L16.9998 4.00004L8.99984 10L0.945838 7.31504Z" />
                            </ItemIcon>
                            <ItemTitle>support@swiftquiz.com</ItemTitle>
                        </ItemWrapper>
                    </a>

                    <Link to="#open-livechat">
                        <ItemWrapper>
                            <ItemIcon viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 7.00002C20.5304 7.00002 21.0391 7.21074 21.4142 7.58581C21.7893 7.96088 22 8.46959 22 9.00002V13C22 13.5305 21.7893 14.0392 21.4142 14.4142C21.0391 14.7893 20.5304 15 20 15H18.938C18.6942 16.9333 17.7533 18.7112 16.2917 20C14.8302 21.2888 12.9486 22 11 22V20C12.5913 20 14.1174 19.3679 15.2426 18.2427C16.3679 17.1174 17 15.5913 17 14V8.00002C17 6.40872 16.3679 4.8826 15.2426 3.75738C14.1174 2.63216 12.5913 2.00002 11 2.00002C9.4087 2.00002 7.88258 2.63216 6.75736 3.75738C5.63214 4.8826 5 6.40872 5 8.00002V15H2C1.46957 15 0.960859 14.7893 0.585786 14.4142C0.210714 14.0392 0 13.5305 0 13V9.00002C0 8.46959 0.210714 7.96088 0.585786 7.58581C0.960859 7.21074 1.46957 7.00002 2 7.00002H3.062C3.30603 5.06692 4.24708 3.2893 5.70857 2.0007C7.17007 0.712101 9.05155 0.00109863 11 0.00109863C12.9484 0.00109863 14.8299 0.712101 16.2914 2.0007C17.7529 3.2893 18.694 5.06692 18.938 7.00002H20ZM6.76 14.785L7.82 13.089C8.77308 13.6861 9.87537 14.0018 11 14C12.1246 14.0018 13.2269 13.6861 14.18 13.089L15.24 14.785C13.9693 15.5812 12.4995 16.0023 11 16C9.50046 16.0023 8.03074 15.5812 6.76 14.785Z" />
                            </ItemIcon>
                            <ItemTitle>Live Chat</ItemTitle>
                        </ItemWrapper>
                    </Link>
                </LinkWrapper>
            </Saver>
        </Container>
    )
}
