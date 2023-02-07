import DivColumn from "@/components/atoms/conteiners/DivColumn";
import DivRow from "@/components/atoms/conteiners/DivRow";
import React from "react";
import styled from "styled-components";
import AverageRow from "./AverageRow";

const DivColumnWrap = styled(DivColumn)`
    flex: 3;
    height: 100%;
    overflow: hidden;
    gap: 10px;
    margin-top: 10px;
`;

const ListAverageViewWrap = styled(DivColumn)`
    height: 100%;
    max-height: 100%;
    gap: 10px;
    width: 100%;
    overflow: scroll;
`;

export default function ListAverageView() {
    return (
        <DivColumnWrap>
            <AverageRow 
                isTitle={true}
                firstCell={"previous"}
                secondCell={"current"}
                thirdCell={"average"}
            />
            <ListAverageViewWrap>
                <AverageRow />
                <AverageRow />
                <AverageRow />
                
            </ListAverageViewWrap>
        </DivColumnWrap>
    );
}