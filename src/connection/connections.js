const axios = require('axios').default;

// Make a request for a user with a given ID
export const getPelajaran = (setList,keywords)=>{
    axios.get('http://localhost:3000/api/getpelajaran?search='+keywords,{mode:'cors'})
            .then(function (response) {
                setList(response.data.result)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
}
