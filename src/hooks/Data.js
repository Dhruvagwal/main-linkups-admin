import instances from '../data/axios'
import {AsyncStorage} from 'react-native'

const STORAGE_KEY_3 = 'LINKUPS_USER_PHONE_NUMBER' 

const getData = async ()=>{
    const PHONE_NUMBER = await AsyncStorage.getItem(STORAGE_KEY_3)
    return await instances.get(`/ReadId/api/users/${PHONE_NUMBER}`).then(response=>{
        return response.data
    }).catch(err=>console.log(err))
}


const useService = async (state, {name,MRP, discount, warranty})=>{
    const PHONE_NUMBER = await AsyncStorage.getItem(STORAGE_KEY_3)
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
    
    await instances.put(`/Update/api/users/${PHONE_NUMBER}`,Data)
}

const saveData = async (name, location,price, imageUri)=>{
    const PHONE_NUMBER = await AsyncStorage.getItem(STORAGE_KEY_3)
    const data = {
        name,
        location,
        price:parseInt(price.replace('₹ ','')),
        imageUri
    }
    await instances.put(`/Update/api/users/${PHONE_NUMBER}`,data)
}

export {useService, getData, saveData }