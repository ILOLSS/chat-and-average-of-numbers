import ChatView from "@/components/molecules/chat/ChatView";
import SendingMessageView from "@/components/molecules/chat/SendingMessageView";
import React, { useState, createContext } from "react";
import styled from "styled-components";
import Page from "@/components/molecules/Page";
import getMessages from "@/database/messages/helpers/getMessages";

export async function getServerSideProps() {

    const messages = await getMessages();

    return { props: { messages } }; 
};

export const ChatContext = createContext(null);

export default function Chat({ messages }) {
    return (
        <ChatContext.Provider value={{ messages }}>
            <Page>
                <ChatView />
                <SendingMessageView />
            </Page>
        </ChatContext.Provider>
    );
}
