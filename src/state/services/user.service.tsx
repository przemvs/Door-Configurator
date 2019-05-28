import {baseURL} from "../api";
import {LOGIN_ENDPOINT, ORGANIZATION_ENDPOINT} from "../endpoint";

type FetchData = {
    (url: string, options: object): void
}

interface Login {
    (email: string, password: string): void
}

interface OrganizationData {
    (token: string): void
}

const handleResponse = (response: Response) => response.status === 404 ? Promise.reject(response) : response.json()

const fetchData: FetchData = async (url, options) => fetch(url, options)
    .then(handleResponse)
    .then(data => data)
    .catch(err => console.error(err))

const login: Login = (email, password) => {
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    }

    return fetchData(baseURL + LOGIN_ENDPOINT, options)
}

const getOrganizationData: OrganizationData = token => {
    const options = {
        method: 'Get',
        headers: {'Authorization': token}
    }

    return fetchData(baseURL + ORGANIZATION_ENDPOINT, options)
}

export const userService = {
    login,
    getOrganizationData
}
