import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import Charac from "./charac";
import DetailCharacters from "./component/details";


const routes =  [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Charac />
            },
            {
                path: "/characters/:id",
                element: <DetailCharacters />
            },

        ]
    }

]

function Root() {
    return (
        <>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/characters/:id">Characters</Link>
                </nav>
            </header>
            <div className="content">
                <Outlet />
            </div>

        </>
    );
}

export default routes;
