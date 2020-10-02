import SERVER_URL from "./constants.js";
let URL = SERVER_URL;

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

function makeOptions(method, body) {
    var opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    }
    if (body) {
        opts.body = JSON.stringify(body);
    }
    return opts;
}

function getAllPersons() {
    return fetch(URL + "all")
    .then(handleHttpErrors)
}

function addPerson(person) {
    const options = makeOptions("POST", person)
    return fetch(URL, options)
    .then(handleHttpErrors)
}

function deletePerson(id){
    const options = makeOptions("DELETE");
    return fetch(URL + id, options)
    .then(handleHttpErrors)
}

function editPerson(id, user){
    const options = makeOptions("PUT", user);
    return fetch(URL + id, options)
    .then(res => res.json())
    .then(handleHttpErrors)
}

const personFacade = {
    getAllPersons,
    addPerson,
    deletePerson,
    editPerson
}

export default personFacade;




