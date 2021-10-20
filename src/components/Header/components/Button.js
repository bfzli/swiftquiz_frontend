import styled from "styled-components";

const Btn = styled.button`
    font-family: 'Integral CF Demi Bold';
    font-size: .9em;
    padding: 0.775em 1.5em;
    background: #fff;
    color: #5928E5;
    border-radius: 100px;
    border: 0;
    transition: all ease-in-out .3s;
    cursor: pointer;

    &:hover{
        letter-spacing: 3px;
    }
`

export default function Button() {
    return (
        <Btn>
            GET STARTED
        </Btn>
    )
}
