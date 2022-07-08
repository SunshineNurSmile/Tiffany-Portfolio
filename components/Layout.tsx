import Meta from "./Meta";
import Nav from "./Nav";

const Layout = ({children}:{children:any}) => {
    return (
        <>
            <Meta />
            <Nav />

            <div className="flex justify-center h-screen w-screen">
                {children}
            </div>
        </>
    );
};

export default Layout;
