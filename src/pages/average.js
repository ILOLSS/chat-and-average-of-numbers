import React, { useState, createContext } from "react";
import Page from "@/components/molecules/Page";
import ListAverageView from "@/components/molecules/average/ListAverageView";
import SendingNumberView from "@/components/molecules/average/SendingNumberView";

export const AverageContext = createContext(null);

function Average() {

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

export default Average;
