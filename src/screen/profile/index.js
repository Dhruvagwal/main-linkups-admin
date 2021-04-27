import React from 'react'
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native'

import moment from "moment"

import {Logout} from '../../hooks/useAuth'
import {AuthConsumer} from '../../context/auth'

import {DataConsumer} from '../../context/data'

const WIDTH = Dimensions.get('screen').width

const Index = () => {

    const {setAuth} = AuthConsumer()
    const {state} = DataConsumer()

    const {AccountHolderName, createdOn, id}  = state.profile

    const logout = async ()=>{
        await Logout()
        setAuth(false)
    }

    const createDate = moment(createdOn).format('lll')

    return (
        <View style={styles.container}>
            <Text>+{id}</Text>
            <Text>{AccountHolderName}</Text>
            <Text>{createDate}</Text>
            <View style={{alignItems:'stretch',alignSelf:'center',width:WIDTH/1.5, position:'absolute',bottom:20, justifyContent:'center', flex:1}}>
                <Button title='Logout' onPress={logout}/>
            </View>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container:{
        width: WIDTH, 
        padding:25
    }
})
