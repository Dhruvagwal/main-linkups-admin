import axios from 'axios'
 
const NGROK = "http://1d6f119b86c8.ngrok.io"
const instances = axios.create({
    baseURL:`${NGROK}/mainlinkupsadmin/us-central1`
})

export default instances

