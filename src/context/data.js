import React, {useContext, useEffect,useState, useReducer} from 'react'
import {getData} from '../hooks/Data'

import AUTH from './AUTH.json'

const INITIAL_STATE = {profile:{}}

const Context = React.createContext()

const reducer = (state, action)=>{
    switch (action.type){
        case AUTH.UPDATE_INITIAL_STATE:
                return {...state, profile: action.profile}
        default:
            return state
    }
}


const DataProvider = ({children})=>{

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    
    const Update = async ()=>{
        const profile = await getData()
        dispatch({type:AUTH.UPDATE_INITIAL_STATE, profile})
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