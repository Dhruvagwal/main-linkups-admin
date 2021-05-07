import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput, Dimensions, Button, ActivityIndicator } from 'react-native'

import * as RootNavigation from '../../navigation/RootNavigation'
import CONSTANT from '../../navigation/navigationConstant.json'

import {useService} from '../../hooks/Data'

import {DataConsumer} from '../../context/data'

const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height


const AddService = () => {
    const [name, setName] = useState()
    const [discount, setDiscount] = useState()
    const [warranty, setWarranty] = useState()
    const [MRP, setMRP] = useState()

    const [loading, setLoading] = useState(false)
    const {state, Update} = DataConsumer()

    useEffect(()=>{Update()},[])

    const Upload =async ()=>{
        setLoading(true)
        await useService(state,{name, MRP,discount, warranty})
        await Update()
        setLoading(false)
        RootNavigation.navigate(CONSTANT.Service, {screen:CONSTANT.ServiceListView})
    }
    return (
        <View style={{flex:1}}>
            <View style={{height:HEIGHT*.1}}/>

            <View style={{alignItems:'center'}}>
                <Text style={{fontWeight:'700', fontSize:30, opacity:0.5}}>ADD SERVICE</Text>
                <Text>{'\n'}</Text>
                <TextInput onChangeText={setName} value={name} style={styles.TextInput} placeholder='Name'/>
                <TextInput onChangeText={setDiscount} value={discount} keyboardType='numeric' style={styles.TextInput} placeholder='Discount'/>
                <TextInput onChangeText={setMRP} value={MRP} keyboardType='numeric' style={styles.TextInput} placeholder='M.R.P.'/>
                <TextInput onChangeText={setWarranty} value={warranty} keyboardType='numeric' style={styles.TextInput} placeholder='Warranty'/>
                <Text>{'\n'}</Text>
                {loading?<ActivityIndicator size="large" color="#3196e2"/>
                :<Button title='Upload' onPress={Upload}/>
                }
            </View>

        </View>
    )
}

export default AddService

const styles = StyleSheet.create({
    TextInput:{
        padding:5, 
        width: WIDTH/1.2,
        alignSelf:'center',
        margin:5,
        fontSize:20,
        opacity:0.9,
        borderBottomColor:'#aaa',
        borderBottomWidth:1
    }
})
