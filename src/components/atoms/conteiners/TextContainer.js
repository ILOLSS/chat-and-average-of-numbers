import styled from "styled-components";
import DivRow from "./DivRow";

const TextContainer = styled(DivRow)`
    height: auto;
    width: 100%;
    color: ${props => props.isTitle ? "#E98074" : "#4E4B4B"};
    font-size: ${props => props.isTitle ? "18px" : "16px"};
    font-weight: ${props => props.isTitle ? "600" : "400"};
`;

export default TextContainer;
