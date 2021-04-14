import {FLATS_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import Main from "../pages/mainPage/Main";
import Flats from "../pages/flatsPage/Flats";
import Flat from "../pages/flatsPage/flatPage/Flat";
import Auth from "../pages/authPage/Auth";

export const authRoutes = [
    {
        "path": MAIN_ROUTE,
        "Component": Main
    },
    {
        "path": FLATS_ROUTE,
        "Component": Flats
    },
    {
        "path": FLATS_ROUTE + "/:id",
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
];
export const publicRoutes = [
    {
        "path": MAIN_ROUTE,
        "Component": Main
    },
    {
        "path": FLATS_ROUTE,
        "Component": Flats
    },
    {
        "path": FLATS_ROUTE + "/:id",
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
];