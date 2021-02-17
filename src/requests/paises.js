const axios = require('axios');

module.exports = {
    todosLosPaises: function(unaProvincia) {
        return axios({
            baseURL: 'https://restcountries.eu/rest/v2/',
            timeout: 4000,
            method: 'get',
            url: 'all'
        })
    }
}