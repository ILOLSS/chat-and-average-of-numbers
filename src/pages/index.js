import styled from "styled-components";
import TextContainer from "@/components/atoms/conteiners/TextContainer";
import Page from "@/components/molecules/Page";

const HomePage = styled(Page)`
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const Link = styled.a`
  text-decoration: none;
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
