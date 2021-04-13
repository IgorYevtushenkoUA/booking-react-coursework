import {ADMIN_ROUTE, FLAT_ROUTE, FLATS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import Flats from "../../pages/flatsPage/Flats";
import Auth from "../../pages/authPage/Auth";
import Flat from "../../pages/flatsPage/flatPage/Flat";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: FLATS_ROUTE,
        Component: Flats
    },
    {
        path: FLAT_ROUTE + '/:id',
        Component: Flat
    }
];

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Flats // change to Auth
    },
    {
        path: ADMIN_ROUTE,
        Component: Flats
    }
];
// export const clientRoutes = [];
// export const ownerRoutes = [];
