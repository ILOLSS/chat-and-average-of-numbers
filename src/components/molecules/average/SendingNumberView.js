import React, { useState, useContext } from "react";
import { AverageContext } from "@/pages/average";
import styled from "styled-components";
import DivColumn from "@/components/atoms/conteiners/DivColumn";
import Input from "@/components/atoms/inputs/Input";
import SendButton from "@/components/atoms/buttons/SendButton";
import postNumber from "@/services/api/numbers/postNumber";
import isNumber from "@/database/numbers/helpers/isNumber";

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

function SendingNumberView() {

    const { setNumbers } = useContext(AverageContext);

    const [number, setNumber] = useState("");

    const Send = function() {
        if (!isNumber(number)) {
            return;
        }
        postNumber(number)
            .then((data) => {
                setNumbers(prev => [data.data.data, ...prev]);
            })
            .catch((error) => console.error(error));
        setNumber("");
    };

    return (
        <SendingNumberViewWrap>
            <NumberInput 
                type="number"
                placeholder="number"
                value={number}
                onChange={(event) => setNumber(event.target.value)}
            />
            <SendButton onClick={Send}>SEND</SendButton>
        </SendingNumberViewWrap>
    );
}

export default SendingNumberView;
