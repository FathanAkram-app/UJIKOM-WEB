import { tokenCookies } from '../components/helper_components/authentication';

const axios = require('axios').default;
const baseUrl = "http://localhost:3000"
// Make a request for a user with a given ID
export const getPelajaran = (setList,keywords)=>{
    axios.get(baseUrl+'/api/getpelajaran?search='+keywords)
            .then(function (response) {
                setList(response.data.result)
            })
            .catch(function (error) {
                console.log(error);
            })
}

export const submitLogin = (data)=>{
    const d = btoa(JSON.stringify({...data,serverkey:"B1smill4hUJIKOM"}))
    axios.post(baseUrl+'/api/admin/login',{},
    {
        headers:{
            "Authorization": d
        }
    })
    .then((res)=>{
        document.cookie = "token="+res.data.result.token;
        window.location.reload()
    })
    .catch(function (error) {
        console.log(error);
    })

}

export const getUsers = (setList,keywords) =>{
    axios.post(baseUrl+'/api/admin/getusers',
    {
        search:keywords,
        token: tokenCookies()
    },
    {
        headers:{
            "Authorization": 'eyJzZXJ2ZXJrZXkiOiJCMXNtaWxsNGhVSklLT00ifQ=='
        }
    })
    .then((res)=>{
        setList(res.data.result)
    })
    .catch((error)=>{
        console.log(error)
    })
}
export const addPelajaran = (data) =>{
    const body = {
        nama:data.nama_pelajaran,
        kelas:data.kelas,
        guru_id:parseInt(data.id_guru),
        waktu: data.tanggal+" "+data.waktu+":00",
        materi: data.materi
    }
    axios.post(baseUrl+'/api/addpelajaran',
    body,
    {
        headers:{
            "Authorization": 'eyJzZXJ2ZXJrZXkiOiJCMXNtaWxsNGhVSklLT00ifQ=='
        }
    })
    .then((res)=>{
        console.log(res.data)
        window.location.reload()
    })
    .catch((error)=>{
        console.log(body)
        console.log(error)
    })
}

export const deletePelajaran = (id) =>{
    const body = {
        id:id
    }
    axios.post(baseUrl+'/api/deletepelajaran',
    body,
    {
        headers:{
            "Authorization": 'eyJzZXJ2ZXJrZXkiOiJCMXNtaWxsNGhVSklLT00ifQ=='
        }
    })
    .then((res)=>{
        console.log(res.data)
        window.location.reload()
    })
    .catch((error)=>{
        console.log(body)
        console.log(error)
    })
}