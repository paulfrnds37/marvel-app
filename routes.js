import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import Charac from "./charac";

const routes =  [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "blog",
                element: <div>
                    Blog
                </div>,
            },
            {
                path: "contact",
                element: <Charac/>
            }
        ]
    }
]

function Root() {
    return (
        <>
            <header>
                <nav>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Characters</Link>
                </nav>
            </header>
            <div className="content">
                <Outlet />
            </div>
            <footer>
                Footer
            </footer>
        </>
    );
}

export default routes;
