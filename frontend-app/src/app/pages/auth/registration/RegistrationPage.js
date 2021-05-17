import {useLocation} from "react-router-dom";
import {REGISTRATION_OWNER_ROUTE} from "../../../utils/consts";
import RegistrationAccountPage from "./account/RegistrationAccountPage";

const RegistrationPage = () => {

    let location = useLocation();
    const role = location.pathname === REGISTRATION_OWNER_ROUTE ? 2 : 3;

    return <RegistrationAccountPage role={role} /> ;
};

export default RegistrationPage;