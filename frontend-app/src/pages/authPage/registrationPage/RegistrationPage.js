import RegistrationOwnerPage from "./registrationOwnerPage/RegistrationOwnerPage";
import RegistrationClientPage from "./registrationClientPage/RegistrationClientPage";
import {useLocation} from "react-router-dom";
import {REGISTRATION_OWNER_ROUTE} from "../../../utils/consts";

const RegistrationPage = () => {

    const location = useLocation();
    const isOwnerRegister = location.pathname === REGISTRATION_OWNER_ROUTE;

    return (isOwnerRegister ? <RegistrationOwnerPage/> : <RegistrationClientPage/>);
};

export default RegistrationPage;