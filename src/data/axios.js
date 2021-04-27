import axios from 'axios'
 
const NGROK = "http://1af8cce39b1b.ngrok.io"
const instances = axios.create({
    baseURL:`${NGROK}/mainlinkupsadmin/us-central1`
})

export default instances

