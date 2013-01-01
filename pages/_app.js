import AuthProvider from "../context/auth/AuthProvider";
import "../styles/globals.css";
import Layout from "./../components/layout/Layout";

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AuthProvider>
    );
}

export default MyApp;
