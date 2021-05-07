import axios from 'axios'
 
const NGROK = "http://307b3f3999c4.ngrok.io"
const instances = axios.create({
    baseURL:`${NGROK}/mainlinkupsadmin/us-central1`
})

export default instances

