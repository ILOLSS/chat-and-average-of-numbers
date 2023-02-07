import styled from "styled-components";
import GappedContainer from "@/components/atoms/conteiners/GappedContainer";
import MessageView from "./MessageView";

const MessageContainer = styled(GappedContainer)`
    flex-direction: column;
    justify-content: start;
    flex: 3;
    height: 100%;
    overflow: scroll;
`;

export default function ChatView() {
    return (
        <MessageContainer>
            <MessageView />
            <MessageView />
            <MessageView />
            <MessageView />
            <MessageView />
            <MessageView />
            <MessageView />
            <MessageView />
            <MessageView />
        </MessageContainer>
    );
}
