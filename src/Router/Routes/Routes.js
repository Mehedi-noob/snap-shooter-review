import { createBrowserRouter } from "react-router-dom";
import { default as Main } from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Services from "../../Pages/Services/Services";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/services',
                element: <Services></Services>
            }
        ]
    }
]);

export default router;