import DivRow from "@/components/atoms/conteiners/DivRow";
import TextContainer from "@/components/atoms/conteiners/TextContainer";
import React from "react";
import styled from "styled-components";

const AverageRowWrap = styled(DivRow)`
    justify-content: space-around;
    height: 50px;
    min-height: 50px;
    max-height: 50px;
    width: 100%;
`;

export default function AverageRow({ firstCell = "first", secondCell = "second", thirdCell = "third", isTitle = false }) {
    return (
        <AverageRowWrap>
            <TextContainer isTitle={isTitle}>{ firstCell }</TextContainer>
            <TextContainer isTitle={isTitle}>{ secondCell }</TextContainer>
            <TextContainer isTitle={isTitle}>{ thirdCell }</TextContainer>
        </AverageRowWrap>
    );
}
