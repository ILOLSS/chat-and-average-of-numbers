import styled from "styled-components";
import TextContainer from "@/components/atoms/conteiners/TextContainer";
import DivColumn from "@/components/atoms/conteiners/DivColumn";

const MessageViewWrap = styled(DivColumn)`
    height: auto;
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

export default function MessageView() {
    return (
        <MessageViewWrap>
            <AuthorWrap>John Doe</AuthorWrap>
            <TextContainer>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</TextContainer>
        </MessageViewWrap>
    );
}
