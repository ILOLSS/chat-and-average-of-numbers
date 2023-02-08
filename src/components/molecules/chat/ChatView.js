import React, { useContext } from "react";
import { ChatContext } from "@/pages/chat";
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

function ChatView() {

    const {messages} = useContext(ChatContext);

    return (
        <MessageContainer>
            {messages.map(message => 
                <MessageView 
                    key={message.id} 
                    author={message.author} 
                    text={message.text} 
                />
            )}
        </MessageContainer>
    );
}

export default ChatView;
