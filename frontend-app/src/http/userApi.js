import {$authHost, $host} from "./index";

export const registration = async (email, password) => {
    const response = await $host.post("api/user/registration", {email, password, role: "ADMIN"})
}

export const login = async (email, password) => {
    const {data} = await $host.post("api/user/login", {email, password})
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
    return data;
}

export const check = async () => {
    let email = localStorage.getItem('email')
    let password = localStorage.getItem('password')
    const {data} = await $host.post("api/user/login", {email, password})
    return data;
}

