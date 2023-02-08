import styled from "styled-components";
import GappedContainer from "@/components/atoms/conteiners/GappedContainer";
import MessageView from "./MessageView";
import { useContext } from "react";
import { ChatContext } from "@/pages/chat";

const MessageContainer = styled(GappedContainer)`
    flex-direction: column;
    justify-content: start;
    flex: 3;
    height: 100%;
    overflow: scroll;
`;

export default function ChatView() {

    const {messages} = useContext(ChatContext);

    return (
        <MessageContainer>
            {
                messages.map(message => <MessageView key={message.id} author={message.author} text={message.text} />)
            }
            {/* <MessageView />
            <MessageView />
            <MessageView />
            <MessageView />
            <MessageView />
            <MessageView />
            <MessageView />
            <MessageView />
            <MessageView /> */}
        </MessageContainer>
    );
}
