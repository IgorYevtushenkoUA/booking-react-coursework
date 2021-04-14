import {RENT_FLATS_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, ABOUT_US_ROUTE} from "../utils/consts";
import Main from "../pages/mainPage/Main";
import Flats from "../pages/flatsPage/rentFlats/Flats";
import Flat from "../pages/flatsPage/flatPage/Flat";
import Auth from "../pages/authPage/Auth";
import AboutUs from "../pages/aboutUsPage/AboutUs";

export const authRoutes = [
    {
        "path": MAIN_ROUTE,
        "Component": Main
    },
    {
        "path": RENT_FLATS_ROUTE,
        "Component": Flats
    },
    {
        "path": RENT_FLATS_ROUTE + "/:id",
        "Component": Flat
    },
    {
        "path": LOGIN_ROUTE,
        "Component": Auth
    },
    {
        "path": REGISTRATION_ROUTE,
        "Component": Auth
    },
    {
        "path": ABOUT_US_ROUTE,
        "Component": AboutUs
    }
];
export const publicRoutes = [
    {
        "path": MAIN_ROUTE,
        "Component": Main
    },
    {
        "path": RENT_FLATS_ROUTE,
        "Component": Flats
    },
    {
        "path": RENT_FLATS_ROUTE + "/:id",
        "Component": Flat
    },
    {
        "path": LOGIN_ROUTE,
        "Component": Auth
    },
    {
        "path": REGISTRATION_ROUTE,
        "Component": Auth
    },
    {
        "path": ABOUT_US_ROUTE,
        "Component": AboutUs
    }
];