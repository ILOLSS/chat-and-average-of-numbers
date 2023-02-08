import React, { useEffect, useState, useContext } from "react";
import { AverageContext } from "@/pages/average";
import styled from "styled-components";
import DivColumn from "@/components/atoms/conteiners/DivColumn";
import DivRow from "@/components/atoms/conteiners/DivRow";
import TextContainer from "@/components/atoms/conteiners/TextContainer";
import AverageRow from "./AverageRow";
import getNumber from "@/services/api/numbers/getNumber";

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

function ListAverageView() {

    const {numbers, setNumbers} = useContext(AverageContext);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getNumber()
            .then((data) => {
                setIsLoading(false);
                setNumbers(data.data.numbers);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <DivColumnWrap>
            <AverageRow 
                isTitle={true}
                firstCell={"previous"}
                secondCell={"current"}
                thirdCell={"average"}
            />
            {
                isLoading
                ? <DivRow>
                    <TextContainer>Loading...</TextContainer>
                </DivRow>
                : <ListAverageViewWrap>
                    {numbers.map((element) => 
                        <AverageRow 
                            firstCell={element.previous}
                            secondCell={element.current}
                            thirdCell={element.average}
                        />
                    )}
                </ListAverageViewWrap>
            }
        </DivColumnWrap>
    );
}

export default ListAverageView;
