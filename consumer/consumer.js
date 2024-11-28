const axios = require('axios');

const fetchData = async (id)=> {
    const response = await axios.get(`http://localhost:8081/data/${id}`,{
            headers: {  Accept: 'application/json' }
        });
    return response.data;
};

module.exports = { fetchData };
