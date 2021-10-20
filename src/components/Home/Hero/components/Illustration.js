import styled from "styled-components"
import illustration from '../../../../assets/images/illustration.png'

const Image = styled.img`
position: absolute;
bottom: 0;`


export default function Illustration() {
    return (
        <Image width="600" src={illustration} alt="Illustration" />
    )
}
