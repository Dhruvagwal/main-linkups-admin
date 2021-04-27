import axios from 'axios'
 
const NGROK = "http://4ef4bbaaa78a.ngrok.io"
const instances = axios.create({
    baseURL:`${NGROK}/mainlinkupsadmin/us-central1`
})

export default instances

