import React, { createContext } from "react";
import PropTypes from "prop-types";
import Page from "@/components/molecules/Page";
import ChatView from "@/components/molecules/chat/ChatView";
import SendingMessageView from "@/components/molecules/chat/SendingMessageView";
import getMessages from "@/database/messages/controllers/getMessages";

export async function getServerSideProps() {

    const messages = await getMessages();

    return { props: { messages } }; 
}

export const ChatContext = createContext(null);

function Chat({ messages }) {
    return (
        <ChatContext.Provider value={{ messages }}>
            <Page>
                <ChatView />
                <SendingMessageView />
            </Page>
        </ChatContext.Provider>
    );
}

Chat.propTypes = { 
    messages: PropTypes.arrayOf(PropTypes.object)
};

export default Chat;
