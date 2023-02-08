import styled from "styled-components";
import Link from "../atoms/Link";

const FooterWrap = styled.footer`
    box-sizing: border-box;
    width: 100%;
    min-height: 50px;
    display: flex;
    justify-content: start;
    align-items: center;
    color: #8E8D8A;
    padding: 0 10px;
`;

function Footer() {
    return (
        <FooterWrap>
            <Link href="https://github.com/ILOLSS/chat-and-average-of-numbers">
                repository
            </Link>
        </FooterWrap>
    );
}

export default Footer;
