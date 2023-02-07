import styled from "styled-components";
import Link from "next/link";

const NavigateButton = styled(Link)`
    height: 100%;
    min-width: 80px;
    max-width: 80px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EAE7DC;
    border-radius: 5px;
    border: 1px solid #8E8D8A;
    font-size: 18px;
    font-weight: 600;
    color: #8E8D8A;
`;

export default NavigateButton;
