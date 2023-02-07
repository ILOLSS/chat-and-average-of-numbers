import Input from "@/components/atoms/inputs/Input";
import styled from "styled-components";
import Page from "@/components/molecules/Page";
import ListAverageView from "@/components/molecules/average/ListAverageView";
import SendingNumberView from "@/components/molecules/average/SendingNumberView";

export default function Average() {
    return (
        <Page>
            <ListAverageView />
            <SendingNumberView />
        </Page>
    );
}
