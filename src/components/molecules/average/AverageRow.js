import React from "react";
import styled from "styled-components";
import DivRow from "@/components/atoms/conteiners/DivRow";
import TextContainer from "@/components/atoms/conteiners/TextContainer";

const AverageRowWrap = styled(DivRow)`
    justify-content: space-around;
    height: 50px;
    min-height: 50px;
    max-height: 50px;
    width: 100%;
`;

function AverageRow({ firstCell, secondCell, thirdCell, isTitle = false }) {
    return (
        <AverageRowWrap>
            <TextContainer isTitle={isTitle}>{ firstCell }</TextContainer>
            <TextContainer isTitle={isTitle}>{ secondCell }</TextContainer>
            <TextContainer isTitle={isTitle}>{ thirdCell }</TextContainer>
        </AverageRowWrap>
    );
}

AverageRow.propTypes = {
    firstCell: PropTypes.string.isRequired,
    secondCell: PropTypes.string.isRequired,
    thirdCell: PropTypes.string.isRequired,
    isTitle: PropTypes.bool
};

export default AverageRow;
