import {
    RENT_FLATS_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    REGISTRATION_CLIENT_ROUTE,
    ABOUT_US_ROUTE,
    OWNER_PERSONAL_PAGE,
    SELL_FLATS_ROUTE,
    REGISTRATION_OWNER_ROUTE,
    OWNER_ADD_FLAT,
    CLIENT_PERSONAL_PAGE, BADOO_FLAT, CLIENT_LIKED_FLATS, OWNER_FLATS
} from "../app/utils/consts"
import MainPage from "./pages/main/MainPage";
import AuthPage from "./pages/auth/AuthPage";
import AboutUsPage from "./pages/aboutUs/AboutUsPage";
import FlatsRentPage from "./pages/flats/flats/rent/FlatsRentPage";
import FlatsSellPage from "./pages/flats/flats/sell/FlatsSellPage";
import FlatPage from "./pages/flat/FlatPage";
import OwnerPage from "./pages/users/owner/OwnerPage";
import CreateFlatPage from "./pages/flats/createFlat/CreateFlatPage";
import BadooPage from "./pages/badoo/BadooPage";
import OwnerFlatPage from "./pages/users/owner/OwnerFlatPage";
import ClientLikedFlatPage from "./pages/users/client/ClientLikedFlatPage";
import ClientPage from "./pages/users/client/clientPage";

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
    {
        "path": RENT_FLATS_ROUTE,
        "Component": FlatsRentPage
    },
    {
        "path": BADOO_FLAT,
        "Component": BadooPage
    },
    {
        "path": RENT_FLATS_ROUTE + "/:id",
        "Component": FlatPage
    },
    {
        "path": SELL_FLATS_ROUTE,
        "Component": FlatsSellPage
    },
    {
        "path": OWNER_PERSONAL_PAGE,
        "Component": OwnerPage
    },
    {
        "path": CLIENT_PERSONAL_PAGE,
        "Component": ClientPage
    },
    {
        "path": OWNER_ADD_FLAT,
        "Component": CreateFlatPage
    },
    {
        "path": CLIENT_LIKED_FLATS,
        "Component": ClientLikedFlatPage
    },
    {
        "path": OWNER_FLATS,
        "Component": OwnerFlatPage
    }


    // {
    //     "path": OWNER_PERSONAL_PAGE + "/:id",
    //     "Component": OwnerPage
    // },
];
