import axios from 'axios'
 
const NGROK = "http://a7eba3d07ee5.ngrok.io"
const instances = axios.create({
    baseURL:`${NGROK}/mainlinkupsadmin/us-central1`
})

export default instances

