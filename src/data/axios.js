import axios from 'axios'
 
const NGROK = "http://3c38f355e4b5.ngrok.io"
const instances = axios.create({
    baseURL:`${NGROK}/mainlinkupsadmin/us-central1`
})

export default instances

