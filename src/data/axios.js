import axios from 'axios'
 
const NGROK = "http://1bfef6396152.ngrok.io"
const instances = axios.create({
    baseURL:`${NGROK}/mainlinkupsadmin/us-central1`
})

export default instances

