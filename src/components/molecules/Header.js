import styled from "styled-components";
import NavigateButton from "../atoms/buttons/NavigateButton";
import GappedContainer from "../atoms/conteiners/GappedContainer";

const HeaderWrap = styled.header`
    box-sizing: border-box;
    width: 100%;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #D8C3A5;
    padding: 5px;
`;

const NickNameWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 18px;
    font-weight: 600;
    color: #8E8D8A;
`;

function Header() {
    return (
        <HeaderWrap>
            <NickNameWrap>ILOLSS</NickNameWrap>
            <GappedContainer>
                <NavigateButton href="/">Home</NavigateButton>
                <NavigateButton href="/chat">Chat</NavigateButton>
                <NavigateButton href="/average">Average</NavigateButton>
            </GappedContainer>
        </HeaderWrap>
    );
}

export default Header;
