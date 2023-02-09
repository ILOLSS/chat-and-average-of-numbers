import React from "react";
import styled from "styled-components";
import TextContainer from "@/components/atoms/conteiners/TextContainer";
import Page from "@/components/molecules/Page";
import Link from "@/components/atoms/Link";

const HomePage = styled(Page)`
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

function Home() {
    return (
        <HomePage>
            <TextContainer justify="center" isTitle={true}>Created by ILOLSS</TextContainer>
            <Link href="https://github.com/ILOLSS">
                <TextContainer isTitle={true}>My GitHub</TextContainer>
            </Link>
        </HomePage>
    );
}

export default Home;
