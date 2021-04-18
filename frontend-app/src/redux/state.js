// import {rerenderEntireTree} from "../index";

let state = {
    user: {id: 4561, roleRoleId: 2},
    flats: [],
    houses: [],
    streets: [],
}

export let addUser = (user) => {
    state.user = user;
    console.log("METHOD ADD USER");
    // rerenderEntireTree(state);
}

export let addFlats = (flats) => {
    state.flats = flats;
    // rerenderEntireTree(state);
}

export default state;