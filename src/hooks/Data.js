import instances from '../data/axios'
import {AsyncStorage} from 'react-native'

const STORAGE_KEY_3 = 'LINKUPS_USER_PHONE_NUMBER' 

const getData = async ()=>{
    const PHONE_NUMBER = await AsyncStorage.getItem(STORAGE_KEY_3)
    return instances.get(`/ReadId/api/users/${PHONE_NUMBER}`).then(response=>{
        return response.data
    }).catch(err=>console.log(err))
}

const getCustomerById = (id)=>{
    return instances.get(`/ReadId/api/users/${id}`)
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
    await instances.put(`/Update/api/users/${PHONE_NUMBER}`,Data)
}

const saveData = async (name, location,price, imageUri,CatPID, profile)=>{
    const PHONE_NUMBER = await AsyncStorage.getItem(STORAGE_KEY_3)
    const data = {
        name,
        location,
        imageUri,
        info:{
            ...profile.info,
            price:parseInt(price.replace('₹ ','')),
            CatPID
        }
    }
    await instances.put(`/Update/api/users/${PHONE_NUMBER}`,data)
}

const getCategory = async (id)=>{
    const {data:{services}} = await instances.get(`/ReadId/api/CATP/${id}`)
    return services
}

const getProviderCategoryList = async ()=>{
    return instances.get('/ReadAll/api/CATP/read')
}

const getOrderDetail = async (Provider_Id)=>{
    return instances.post('/QuerySearch/api/orders/search',{Provider_Id})
}

const getOrderDetailByCustomerId = async (Customer_Id) =>{
    return instances.post('/QuerySearch/api/orders/search',{Customer_Id})
}

export {useService, getData, saveData, getCategory, getProviderCategoryList, getOrderDetail, getCustomerById, getOrderDetailByCustomerId }