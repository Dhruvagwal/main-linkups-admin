import React, {useContext, useEffect,useState, useReducer} from 'react'
import {getData, getCategory} from '../hooks/Data'

import DATA from './CONSTANT.json'

const INITIAL_STATE = {profile:{}, category:{}}

const Context = React.createContext()

const reducer = (state, action)=>{
    switch (action.type){
        case DATA.UPDATE_INITIAL_STATE:
                return {...state, profile: action.profile, category:action.category}
        default:
            return state
    }
}


const DataProvider = ({children})=>{

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    
    const Update = async ()=>{
        const profile = await getData()
        const category = await getCategory()
        dispatch({type:DATA.UPDATE_INITIAL_STATE, profile, category})
    }
    useEffect(()=>{
        Update()
    },[])

    return <Context.Provider value={{state, Update}}>
        {children}
    </Context.Provider>
}

const DataConsumer = ()=>{
    return useContext(Context)
}

export {DataProvider, DataConsumer}