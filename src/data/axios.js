import axios from 'axios'
 
const NGROK = "http://b48ff8c28421.ngrok.io"
const instances = axios.create({
    baseURL:`${NGROK}/mainlinkupsadmin/us-central1`
})

export default instances

