import axios from "axios";

export function getCharacters() {
   
        return new Promise((resolve, reject) => {
            axios.get('https://swapi.dev/api/people/')
            .then((response) => {
                resolve(response.data.results);
            })
            .catch((err) => {
                reject(err.data);
            });
        });
    
}