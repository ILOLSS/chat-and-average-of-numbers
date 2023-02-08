import Input from "@/components/atoms/inputs/Input";
import styled from "styled-components";
import Page from "@/components/molecules/Page";
import ListAverageView from "@/components/molecules/average/ListAverageView";
import SendingNumberView from "@/components/molecules/average/SendingNumberView";
import { useState, createContext } from "react";

export const AverageContext = createContext(null);

export default function Average() {

    const [numbers, setNumbers] = useState(null);

    return (
        <AverageContext.Provider value={{numbers, setNumbers}}>
            <Page>
                <ListAverageView />
                <SendingNumberView />
            </Page>
        </AverageContext.Provider>
    );
}
