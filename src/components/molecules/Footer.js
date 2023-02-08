import styled from "styled-components";

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
            Footer
        </FooterWrap>
    );
}

export default Footer;
