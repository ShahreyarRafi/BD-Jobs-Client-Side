import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Root from "../Layout/Root";
import Home from "../Pages/HomePage/Home";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import ContactUsPage from "../Pages/ContactUsPage/ContactUsPage";
import CartPage from "../Pages/CartPage/CartPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AboutUsPage from "../Pages/AboutUsPage/AboutUsPage";
import AllJobsPage from "../Pages/AllJobsPage/AllJobsPage";
import BlogsPage from "../Pages/BlogsPage/BlogsPage";
import AddAJobPage from "../Pages/AddAJobPage/AddAJobPage";
import MyJobsPage from "../Pages/MyJobsPage/MyJobsPage";
import AppliedJobPage from "../Pages/AppliedJobsPage/AppliedJobPage";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";







const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/jobs'),
            },
            {
                path: 'register',
                element: <RegisterPage></RegisterPage>
            },
            {
                path: 'login',
                element: <LoginPage></LoginPage>
            },
            {
                path: 'contact-us',
                element: <ContactUsPage></ContactUsPage>
            },
            {
                path: 'about-us',
                element: <AboutUsPage></AboutUsPage>
            },
            {
                path: 'all-jobs',
                element: <AllJobsPage></AllJobsPage>,
                loader: () => fetch('http://localhost:5000/jobs'),
            },
            {
                path: 'blogs',
                element: <BlogsPage></BlogsPage>
            },
            {
                path: 'add-a-job',
                element: (
                    <PrivateRoute>
                        <AddAJobPage></AddAJobPage>
                    </PrivateRoute>
                ),
            },
            {
                path: 'my-jobs',
                element: (
                    <PrivateRoute>
                        <MyJobsPage></MyJobsPage>
                    </PrivateRoute>
                ),
            },
            {
                path: 'applied-jobs',
                element: (
                    <PrivateRoute>
                        <AppliedJobPage></AppliedJobPage>
                    </PrivateRoute>
                ),
            },
            {
                path: 'details/:id',
                element: (
                    <PrivateRoute>
                        <DetailsPage></DetailsPage>
                    </PrivateRoute>
                ),
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: 'cart',
                element: (
                    <PrivateRoute>
                        <CartPage></CartPage>
                    </PrivateRoute>
                ),
                // loader: () => fetch('http://localhost:5000/cartItems'),
            },

        ]
    }
])

export default router