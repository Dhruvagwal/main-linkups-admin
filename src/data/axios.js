import axios from 'axios'
 
const NGROK = "http://3f177f403200.ngrok.io"
const instances = axios.create({
    baseURL:`${NGROK}/mainlinkupsadmin/us-central1`
})

export default instances

