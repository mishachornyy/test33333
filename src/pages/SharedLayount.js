import {Link, Outlet} from "react-router-dom";
import StyleNavbar from "../copmontes/StyleNavbar";

const Home = () => {
    return (
        <>
            <StyleNavbar />

            <Outlet />

        </>
    );
};
export default Home;
