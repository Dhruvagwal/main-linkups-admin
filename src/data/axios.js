import axios from 'axios'
 
const NGROK = "http://f61cfd7dbe76.ngrok.io"
const instances = axios.create({
    baseURL:`${NGROK}/mainlinkupsadmin/us-central1`
})

export default instances

