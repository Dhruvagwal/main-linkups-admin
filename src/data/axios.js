import axios from 'axios'
 
const NGROK = "http://2f62e4792752.ngrok.io"
const instances = axios.create({
    baseURL:`${NGROK}/mainlinkupsadmin/us-central1`
})

export default instances

