import ChatView from "@/components/molecules/chat/ChatView";
import SendingMessageView from "@/components/molecules/chat/SendingMessageView";
import React from "react";
import styled from "styled-components";
import Page from "@/components/molecules/Page";

export default function Chat() {
    return (
        <Page>
            <ChatView />
            <SendingMessageView />
        </Page>
    );
}
