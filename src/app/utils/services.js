import axios from "axios";


const SERVERURL = 'https://randomuser.me/';


export const httpCall = (method, url, param) => {
    return new Promise((resolve, reject) => {
        const data = param;
        url = SERVERURL + url

        const formData = new FormData()

        const headers = {
            'Content-Type': 'application/json',
        }
        if (method.toUpperCase() === 'POST') {
            axios
                .post(url, data, { headers: headers })
                // .post(url, FormData, { headers: headers })
                .then(response => {
                    return resolve(response.data);
                })
                .catch(error => {
                    console.log('Error', error);
                    return reject(error);
                });
        } else if (method.toUpperCase() === 'GET') {
            axios
                .get(url, { headers: headers })
                .then(response => {
                    return resolve(response.data);
                })
                .catch(error => {
                    console.log('Error', error);
                    return reject(error);
                });
        }

    })
        .catch(error => {
            console.log(error)
        });
};
