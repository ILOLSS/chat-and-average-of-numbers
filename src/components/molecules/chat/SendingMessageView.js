import Input from "@/components/atoms/inputs/Input";
import SendButton from "@/components/atoms/buttons/SendButton";
import React, { useState } from "react";
import styled from "styled-components";
import DivColumn from "@/components/atoms/conteiners/DivColumn";

const SendingMessageViewWrap = styled(DivColumn)`
    flex: 1;
    margin: 10px;
    gap: 10px;
`;

const MessageInput = styled.textarea`
    resize: none;
    outline: none;
    box-sizing: border-box;
    width: 100%;
    outline: none;
    background-color: transparent;
    color: #4E4B4B;
    font-size: 16px;
    font-family: sans-serif;
    border-radius: 5px;
    border: 1px solid #8E8D8A;
    height: 30px;
    min-height: 30px;
    max-height: 500px;
    padding: 5px;
`;

export default function SendingMessageView() {

    const [author, setAuthor] = useState("");
    const [message, setMessage] = useState("");

    const onInput = function(event) {
        event.target.style.height = "30px";
        event.target.style.height = `${event.target.scrollHeight}px`;
        setMessage(event.target.value);
    }

    return (
        <SendingMessageViewWrap>
            <Input 
                placeholder="author"
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
            />
            <MessageInput 
                placeholder="message"
                value={message}
                onInput={onInput}
            />
            <SendButton onClick={() => console.log(message)}>SEND</SendButton>
        </SendingMessageViewWrap>
    );
}
