import {ADMIN_ROUTE, FLAT_ROUTE, LOGIN_ROUTE, REGISTRATION_CLIENT_ROUTE} from "../utils/consts";
import Flats from "../../pages/flatsPage/Flats";
import Auth from "../../pages/authPage/Auth";
import Flat from "../../pages/flatsPage/flatPage/Flat";
import {RENT_FLATS_ROUTE} from "../../../frontend-app/src/utils/consts";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_CLIENT_ROUTE,
        Component: Auth
    },
    {
        path: RENT_FLATS_ROUTE,
        Component: Flats
    },
    {
        path: RENT_FLATS_ROUTE + '/:id',
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
