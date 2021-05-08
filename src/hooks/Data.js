import instances from '../data/axios'
import {AsyncStorage} from 'react-native'

const STORAGE_KEY_3 = 'LINKUPS_USER_PHONE_NUMBER' 

const getData = async ()=>{
    const PHONE_NUMBER = await AsyncStorage.getItem(STORAGE_KEY_3)
    return await instances.get(`/ReadId/api/users/${PHONE_NUMBER}`).then(response=>{
        return response.data
    }).catch(err=>console.log(err))
}


const useService = async (state, newData)=>{
    const {profile} = state
    const {Providers:{customers, services}} = profile
    const PHONE_NUMBER = await AsyncStorage.getItem(STORAGE_KEY_3)
    let Data;
    Data = {
        Providers:{
            customers,
            services:services?[...services,newData]:[newData]
        }
    }
    
    console.log(Data)
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

const getCategory = async ()=>{
    const {data} = await instances.get('/ReadAll/api/CATS/read')
    return data
}

export {useService, getData, saveData, getCategory }