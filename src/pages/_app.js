import styled, { createGlobalStyle } from 'styled-components';
import Layout from '@/components/organisms/Layout';
import GlobalStyle from '@/styles/GlobalStyle';

const AppWindow = styled.div`
  width: 100vw;
  height: 100%;
  max-width: 1500px;
  overflow: hidden;
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <AppWindow>
          <Component {...pageProps} />
        </AppWindow>
      </Layout>
    </>
  );
}
