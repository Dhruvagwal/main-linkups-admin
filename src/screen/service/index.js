import React from 'react'
import { StyleSheet, Text, View, Dimensions, Button, FlatList } from 'react-native'

import CONSTANT from '../../navigation/navigationConstant.json'

import { DataConsumer } from '../../context/data'

const WIDTH = Dimensions.get('screen').width

const ServiceListView = ({data})=>{
    return <View style={styles.serviceContainer}>
        <Text style={{fontSize:20, fontWeight:'700'}}>{data.name}</Text>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text >M.R.P. : {data.MRP}</Text>
            <Text>{data.discount}%</Text>
        </View>
        <Text style={{fontSize:16, opacity:0.6}}>{data.warranty} Days Quality Assurance</Text>
    </View>
}

const Index = ({navigation}) => {

    const {state} = DataConsumer()
    const {profile} = state

    return (
        <View style={{width: WIDTH, padding:25}}>
            <FlatList
                showsVerticalScrollIndicator={false}
                bounces={false}
                data={profile.service}
                keyExtractor={(data)=>{return data.id.toString()}}
                renderItem = {({item})=>{
                return <ServiceListView data={item}/>}}
            />
            <View style={styles.container}>
                <Button title='Add Service' onPress={()=>navigation.navigate(CONSTANT.Service, {screen:CONSTANT.AddService})}/>
            </View>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        bottom:25,
        alignItems:'stretch',
        width:'85%',
        alignSelf:'center'
    },
    serviceContainer:{
        backgroundColor:'#fbd1ff',
        margin:5,
        padding:20,
        borderRadius:5,
        elevation:5,
        borderWidth:0
    }
})
