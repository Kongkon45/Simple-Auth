import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Main/>,
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "/about",
                element : <About/>
            },
            {
                path : "*",
                element : <Error/>
            },
            {
                path : "/login",
                element : <Login/>
            }
        ]
    }
])
export default router;