import styled from 'styled-components'

const Btn = styled.div`
    font-family: 'Integral CF Demi Bold';
    width: 50%;
    font-size: 1.1em;
    padding: 1em 1.9em;
    color: #fff;
    background: #5928E5;
    border-radius: 100px;
    border: 0;
    cursor: pointer;
    text-align: center;
    transition: all ease-in-out .3s;

    &:hover{
        letter-spacing: 3px;
    }
`

export default function Button() {
    return (
        <Btn>
            GO BACK TO HOME
        </Btn>
    )
}
