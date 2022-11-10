import { createBrowserRouter } from "react-router-dom";
import { default as Main } from "../../Layout/Main/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import ErrorElement from "../../Pages/ErrorElement/ErrorElement";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Register from "../../Pages/Register/Register";
import ReviewUpdate from "../../Pages/ReviewUpdate/ReviewUpdate";
import ServiceDetails from "../../Pages/Services/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                loader: ()=> fetch('https://service-review-server-rust.vercel.app/serviceDemo'),
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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                loader: ({params})=> fetch(`https://service-review-server-rust.vercel.app/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/privateRoute',
                element: <PrivateRoute></PrivateRoute>
            },
            {
                path: '/reviews/:id',
                loader: ({params})=> fetch(`https://service-review-server-rust.vercel.app/reviews?_id=${params.id}`),
                element: <PrivateRoute><ReviewUpdate></ReviewUpdate></PrivateRoute>
            }
        ]
    }
]);

export default router;