import axios from 'axios';

const urlBase = 'https://api.covid19api.com/summary';

export default {
    getGlobal: (callback) => {
        const url = urlBase;
        axios.get(url).then((countries) => {
            if (callback) {
                callback(countries.data.Global);
            }
        })
    },
    getCountries: (callback) => {
        const url = urlBase;
        axios.get(url).then((countries) => {
            if (callback) {
                callback(countries.data.Countries);
            }
        })
    }
}