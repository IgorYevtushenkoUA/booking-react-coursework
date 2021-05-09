import {useDispatch} from "react-redux";
import {useEffect} from "react";

export const usePreload = (dispatchFunction) => {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("useEffect")
        dispatch(dispatchFunction());
    }, []);
}

export const usePreloadPRO = (dispatchFunction, url, type) => {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("useEffectPRO")
        dispatch(dispatchFunction(url,type));
    }, []);
}
