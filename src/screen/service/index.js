import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';

import color from '../../asset/styles/color'

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width

const IMAGE_SIZE = 200
const ServiceListView = ()=>{
    return <View style={{flexDirection:'row', height:180,opacity:.95, backgroundColor:color.black, borderRadius:10, alignItems:'center', marginVertical:20}}>
        <Image source={{uri:'https://c4.wallpaperflare.com/wallpaper/471/285/160/robot-light-technics-wallpaper-preview.jpg'}} style={{width:IMAGE_SIZE, height:IMAGE_SIZE, borderRadius:10}}/>
        <View style={{margin:20, alignSelf:'flex-start',width:160 }}>
            <Text style={{color:color.white, fontSize:20, fontWeight:'700', textTransform:'uppercase', letterSpacing:2}} >Fan Repair</Text>
            <Text style={{color:color.Secondary, marginTop:10}}>Bajaj AC Motor Repair</Text>
        </View>
    </View>
}

const Index = () => {
    return (
        <View>
            <View style={{height:HEIGHT*.1}}/>
            <View style={{height:HEIGHT*.15, marginBottom:10}}>
                <LinearGradient start={{x: 0, y:1}} end={{ x: 1, y: 0 }} colors={['#327EDB','#23B4BC' ,'#1AD3A4']} style={{height:'100%', width:'95%', alignSelf:'center', justifyContent:'center', alignItems:'center', borderRadius:20}}>
                    <Text style={{fontSize:20,color:color.white, fontWeight:'700', textTransform:'uppercase'}}>Add New Service</Text>
                </LinearGradient>
            </View>
            <ScrollView>
                <View style={{width:WIDTH*.95, alignSelf:'center', marginTop:20}}>
                        <ServiceListView/>
                        <ServiceListView/>
                        <ServiceListView/>
                        <ServiceListView/>
                </View>
            </ScrollView>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({})
