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

export const registrate = async (first_name, second_name, birth, gender, email, password, phone_num1, phone_num2, phone_num3, passport_ID, last_name, roleRoleId) => {
    const {data} = await $host.post('api/user/create', {
        first_name,
        second_name,
        birth,
        gender,
        email,
        password,
        phone_num1,
        phone_num2,
        phone_num3,
        passport_ID,
        last_name,
        roleRoleId
    })
    return data;
}