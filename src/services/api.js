const axios = require('axios')

const api = axios.create({
    baseURL: 'https://semanaomni6.herokuapp.com',
})

export default api