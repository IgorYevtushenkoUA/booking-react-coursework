import {useDispatch} from "react-redux";
import {useEffect} from "react";

export const usePreload = (dispatchFunction) => {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("useEffect")
        dispatch(dispatchFunction());
    }, []);
}