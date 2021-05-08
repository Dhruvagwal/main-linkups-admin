import axios from 'axios'
 
const NGROK = "http://72a00b10186d.ngrok.io"
const instances = axios.create({
    baseURL:`${NGROK}/mainlinkupsadmin/us-central1`
})

export default instances

