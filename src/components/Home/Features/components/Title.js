import styled from 'styled-components';

const Heading = styled.h1`
    width: 40%;
    text-align: center;
    color: #5928E5;
    font-size: 3em;
    letter-spacing: 1px;
    margin-top: 2.5%;
    margin-bottom: .1em;
`

export default function Title() {
    return (
        <Heading>
            WE GOT YOU WITH OUR FEATURES!
        </Heading>
    )
}