import Input from "@/components/atoms/inputs/Input";
import SendButton from "@/components/atoms/buttons/SendButton";
import React, { useState } from "react";
import styled from "styled-components";
import DivColumn from "@/components/atoms/conteiners/DivColumn";

const SendingNumberViewWrap = styled(DivColumn)`
    flex: 1;
    margin: 10px;
    gap: 10px;
`;

const NumberInput = styled(Input)`
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin:0;
    }

    &[type='number'] {
        -moz-appearance: textfield;
    }   
`;

export default function SendingNumberView() {

    const [number, setNumber] = useState(null);

    return (
        <SendingNumberViewWrap>
            <NumberInput 
                type="number"
                placeholder="number"
                value={number}
                onChange={(event) => setNumber(event.target.value)}
            />
            <SendButton onClick={() => console.log(number)}>SEND</SendButton>
        </SendingNumberViewWrap>
    );
}
