import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ChefRecipeLayout from "../layout/ChefRecipeLayout";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Blogs from "../pages/Others/Blogs/Blogs";
import RecipeDetails from "../pages/Others/RecipeDetails/RecipeDetails/RecipeDetails";
import PrivateRoutes from "./PrivateRoutes";
import NotFound from "../pages/Shared/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Navigate to="/home"></Navigate>
            }

        ]
    },
    {
        path: '/home',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '/blog',
        element: <Main></Main>,
        children: [
            {
                path: '/blog',
                element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: 'details',
        element: <ChefRecipeLayout></ChefRecipeLayout>,
        children: [
            {
                path: ':chefId',
                element: <PrivateRoutes>
                    <RecipeDetails></RecipeDetails>
                </PrivateRoutes>
            }
        ]

    },
    {
        path: 'login',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: 'register',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])
export default router;