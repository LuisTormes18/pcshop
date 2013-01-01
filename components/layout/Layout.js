import Header from './Header';

const Layout = ({ children }) => {
    return (
        <main>
            <Header />
            {children}
            <footer>footer</footer>
        </main>
    );
};

export default Layout;
