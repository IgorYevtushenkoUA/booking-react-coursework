import {
    RENT_FLATS_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    REGISTRATION_ROUTE,
    ABOUT_US_ROUTE,
    CREATE_FLAT_ROUTE, OWNER_PERSONAL_PAGE, SELL_FLATS_ROUTE
} from "../utils/consts";
import Main from "../pages/mainPage/Main";
import RentFlats from "../pages/flatsPage/rentFlats/RentFlats";
import FlatPage from "../pages/flatsPage/rentFlats/flatPage/FlatPage";
import Auth from "../pages/authPage/Auth";
import AboutUs from "../pages/aboutUsPage/AboutUs";
import CreateFlat from "../pages/createFlat/CreateFlat";
import Owner from "../pages/usersPage/ownerPage/Owner";
import SellFlats from "../pages/flatsPage/sellFlats/SellFlats";

export const authRoutes = [
    {
        "path": MAIN_ROUTE,
        "Component": Main
    },
    {
        "path": RENT_FLATS_ROUTE,
        "Component": RentFlats
    },
    {
        "path": RENT_FLATS_ROUTE + "/:id",
        "Component": FlatPage
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
    },
    {
        "path": CREATE_FLAT_ROUTE,
        "Component": CreateFlat
    },
    {
        "path": OWNER_PERSONAL_PAGE + "/:id",
        "Component": Owner
    },
];
export const publicRoutes = [
    {
        "path": MAIN_ROUTE,
        "Component": Main
    },
    {
        "path": RENT_FLATS_ROUTE,
        "Component": RentFlats
    },
    {
        "path": RENT_FLATS_ROUTE + "/:id",
        "Component": FlatPage
    },
    {
        "path": SELL_FLATS_ROUTE,
        "Component": SellFlats
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
    },
    {
        "path": CREATE_FLAT_ROUTE,
        "Component": CreateFlat
    },
    {
        "path": OWNER_PERSONAL_PAGE + "/:id",
        "Component": Owner
    },

];