import axios from "axios";

export const get = (url) => {
    return axios.get(url)
    .then(res => res.data )
    .catch((error) => {
        throw error;
    })
}

export const post = (url) => {
    return axios.post(url)
    .then(res => res.data )
    .catch((error) => {
        throw error;
    })
}