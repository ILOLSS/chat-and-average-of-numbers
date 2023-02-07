import Header from "../molecules/Header";
import Footer from "../molecules/Footer";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
