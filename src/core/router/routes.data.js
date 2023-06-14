import { AboutUs } from "@/components/screens/AboutUs/about-us.component";
import { Auth } from "@/components/screens/Auth/auth.component";
import { Home } from "@/components/screens/Home/home.component";

export const ROUTES = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/auth",
        component: Auth
    },
    {
        path: "/about-us",
        component: AboutUs
    },
]