import axios from 'axios'
 
const NGROK = "http://aeedb99d01d8.ngrok.io"
const instances = axios.create({
    baseURL:`${NGROK}/mainlinkupsadmin/us-central1`
})

export default instances

