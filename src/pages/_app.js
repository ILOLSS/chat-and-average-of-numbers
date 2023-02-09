import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Layout from "@/components/organisms/Layout";
import GlobalStyle from "@/styles/GlobalStyle";

const AppWindow = styled.div`
  width: 100vw;
  height: 100%;
  max-width: 1500px;
  overflow: hidden;
`;

function App({ Component, pageProps }) {
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

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object
};

export default App;
