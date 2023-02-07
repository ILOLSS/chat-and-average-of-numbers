import TextContainer from "@/components/atoms/conteiners/TextContainer";
import Page from "@/components/molecules/Page";
import styled from "styled-components";

const HomePage = styled(Page)`
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;

const Link = styled.a`
  text-decoration: none;
`;

export default function Home() {
  return (
    <HomePage>
      <TextContainer isTitle={true}>Created by ILOLSS</TextContainer>
      <Link href="https://github.com/ILOLSS">
        <TextContainer isTitle={true}>My GitHub</TextContainer>
      </Link>
    </HomePage>
  );
}
