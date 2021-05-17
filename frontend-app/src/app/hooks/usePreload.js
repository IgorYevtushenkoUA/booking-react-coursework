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
        dispatch(dispatchFunction(url, type));
    }, []);
}
export const usePreloadPRO3 = (dispatchFunction, url, type, id) => {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("useEffectPRO3")
        dispatch(dispatchFunction(url, type, id));
    }, []);
}