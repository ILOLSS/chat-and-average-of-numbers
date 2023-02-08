import styled from "styled-components";
import TextContainer from "@/components/atoms/conteiners/TextContainer";
import DivColumn from "@/components/atoms/conteiners/DivColumn";

const MessageViewWrap = styled(DivColumn)`
    height: auto;
    width: 100%;
    padding: 10px;
    gap: 5px;
`;

const AuthorWrap = styled(TextContainer)`
    color: #E98074;
    min-height: 30px;
    max-height: 30px;
    font-size: 18px;
    font-weight: 600;
    justify-content: start;
`;

export default function MessageView({ author, text }) {
    return (
        <MessageViewWrap>
            <AuthorWrap>{author}</AuthorWrap>
            <TextContainer justify="start">{text}</TextContainer>
        </MessageViewWrap>
    );
}
