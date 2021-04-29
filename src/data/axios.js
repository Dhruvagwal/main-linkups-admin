import axios from 'axios'
 
const NGROK = "http://37c3ed4119bf.ngrok.io"
const instances = axios.create({
    baseURL:`${NGROK}/mainlinkupsadmin/us-central1`
})

export default instances

