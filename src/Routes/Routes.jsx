import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ChefRecipeLayout from "../layout/ChefRecipeLayout";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: 'details',
        element: <ChefRecipeLayout></ChefRecipeLayout>,
        children: [
            {
                path: ':id',
                element: <ChefDetails></ChefDetails>
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
    }
])
export default router;