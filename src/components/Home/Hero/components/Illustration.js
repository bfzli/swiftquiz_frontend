import styled from "styled-components"
import illustration from '../../../../assets/images/illustration.png'

const Image = styled.img`
width: 670px;
position: absolute;
bottom: 0;`


export default function Illustration() {
    return (
        <Image src={illustration} alt="Illustration" />
    )
}
