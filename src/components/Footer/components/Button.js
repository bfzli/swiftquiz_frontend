import styled from "styled-components"

const Btn = styled.div`
    font-family: 'Integral CF Demi Bold';
    font-size: 1.15em;
    padding: 0.8em 1.6em;
    background: #fff;
    color: #5928E5;
    border-radius: 100px;
    border: 0;
    transition: all ease-in-out .3s;
    cursor: pointer;

    &:hover{
        letter-spacing: 3px;
    }`

export default function Button() {
    return (
        <Btn>
            BUILD YOUR OWN QUIZ
        </Btn>
    )
}
