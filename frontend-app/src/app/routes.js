import {
    RENT_FLATS_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    REGISTRATION_CLIENT_ROUTE,
    ABOUT_US_ROUTE, OWNER_PERSONAL_PAGE, SELL_FLATS_ROUTE, REGISTRATION_OWNER_ROUTE, OWNER_ADD_FLAT
} from "../app/utils/consts"
import MainPage from "./pages/main/MainPage";
import AuthPage from "./pages/auth/AuthPage";
import AboutUsPage from "./pages/aboutUs/AboutUsPage";

export const authRoutes = [
    {
        "path": MAIN_ROUTE,
        "Component": MainPage
    },
    {
        "path": ABOUT_US_ROUTE,
        "Component": AboutUsPage
    },
    {
        "path": LOGIN_ROUTE,
        "Component": AuthPage
    },
    {
        "path": REGISTRATION_OWNER_ROUTE,
        "Component": AuthPage
    },
    {
        "path": REGISTRATION_CLIENT_ROUTE,
        "Component": AuthPage
    },


    // {
    //     "path": RENT_FLATS_ROUTE,
    //     "Component": RentFlatsPage
    // },
    // {
    //     "path": RENT_FLATS_ROUTE + "/:id",
    //     "Component": FlatPage
    // },
    // {
    //     "path": SELL_FLATS_ROUTE,
    //     "Component": SellFlatsPage
    // },
    // {
    //     "path": OWNER_ADD_FLAT,
    //     "Component": CreateFlat
    // },
    // {
    //     "path": OWNER_PERSONAL_PAGE + "/:id",
    //     "Component": OwnerPage
    // },
];
