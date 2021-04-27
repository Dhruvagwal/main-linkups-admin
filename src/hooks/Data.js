import instances from '../data/axios'
import {AsyncStorage} from 'react-native'

const STORAGE_KEY_3 = 'LINKUPS_USER_PHONE_NUMBER' 

const getData = async ()=>{
    const PHONE_NUMBER = await AsyncStorage.getItem(STORAGE_KEY_3)
    return await instances.get(`/ReadId/api/account/${PHONE_NUMBER}`).then(response=>{
        return response.data
    }).catch(err=>console.log(err))
}

const useService = async (state, {name,MRP, discount, warranty})=>{

    const PHONE_NUMBER = await  AsyncStorage.getItem(STORAGE_KEY_3)

    let Data;
    const newData =  {
            id:Math.floor(Math.random()*1000000),
            name,
            MRP,
            discount,
            warranty
        }
    if (state.profile.service === undefined){
        Data = {service : [newData]}
    }else Data = {service : [...state.profile.service,newData]}
    
    await instances.put(`/Update/api/account/${PHONE_NUMBER}`,Data)
}

export {useService, getData }