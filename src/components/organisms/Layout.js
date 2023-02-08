import Header from "../molecules/Header";
import Footer from "../molecules/Footer";

function Layout({ children }) {
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.element.isRequired
};

export default Layout;
