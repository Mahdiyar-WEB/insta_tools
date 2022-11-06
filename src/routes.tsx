import { lazy } from "react";

const Home = lazy(()=> import("./pages/Home/Home"));
const NotFound = lazy(()=> import("./pages/NotFound/NotFound"));
const SignUp_Login = lazy(()=> import("./pages/SignUp-Login/SignUp-Login"));
const ClientPanel = lazy(()=> import("./pages/ClientPanel/ClientPanel"));


interface IRoutes{
    path:string;
    element: JSX.Element;
}

const routes:IRoutes[] = [
    {path:"/", element:<Home/>},
    {path:"/*", element:<NotFound/>},
    {path:"/login-signup", element:<SignUp_Login/>},
    {path:"/panel/*", element:<ClientPanel/>},
];

export default routes;