import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, ScrollView, TextInput } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';

import { FontAwesome, AntDesign } from '@expo/vector-icons'; 

import color from '../../asset/styles/color'

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width

const IMAGE_SIZE = 200
const ServiceListView = ()=>{

    const Data = [1,2,3]
    return <View style={{flexDirection:'row', height:180,opacity:.95, backgroundColor:color.black, borderRadius:10, alignItems:'center', marginVertical:20}}>
        <Image source={{uri:'https://c4.wallpaperflare.com/wallpaper/471/285/160/robot-light-technics-wallpaper-preview.jpg'}} style={{width:IMAGE_SIZE, height:IMAGE_SIZE, borderRadius:10}}/>
        <View style={{margin:20, alignSelf:'flex-start',width:160 }}>
            <Text style={{color:color.white, fontSize:20, fontWeight:'700', textTransform:'uppercase', letterSpacing:2}} >Fan Repair</Text>
            <Text style={{color:color.Secondary, marginTop:10}}>Bajaj AC Motor Repair</Text>
            {/* <Text style={{color:color.white, alignSelf:'center', fontWeight:'700'}}><Text style={{fontSize:30}}>3</Text>/5</Text> */}
            <Text style={{fontSize:25, fontWeight:'700',marginVertical:10, color:color.white, alignSelf:'center'}}>₹550</Text>
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                {
                    Data.map(()=>{
                        return <AntDesign key={Math.random()} name="star" size={20} color={color.notification} />
                    })
                }
                <AntDesign name="staro" size={20} color={color.notification} />
                <AntDesign name="staro" size={20} color={color.notification} />
            </View>
        </View>
    </View>
}

const Index = () => {
    return (
        <View style={{flex:1}}>
            <View style={{height:HEIGHT*.07}}/>
            <View style={{backgroundColor:color.black,width:WIDTH*0.95, alignSelf:'center', opacity:.95, borderRadius:5, flexDirection:'row', alignItems:'center'}}>
                    <FontAwesome name="search" size={20} color={color.white} style={{marginHorizontal:10}}/>
                    <TextInput placeholder='Search Your Service' placeholderTextColor={color.white} style={{color:color.white, padding:10,fontSize:18, width:WIDTH*0.8}}/>
            </View>  
            <ScrollView>
                <View style={{width:WIDTH*.95,flex:1, alignSelf:'center', marginTop:10}}>
                        <ServiceListView/>
                        <ServiceListView/>
                        <ServiceListView/>
                        <ServiceListView/>
                        <Text>{'\n'}</Text>
                        <Text>{'\n'}</Text>
                </View>
            </ScrollView>
            <View style={{position:'absolute', bottom:20, borderWidth:0,backgroundColor:color.lightGreen, elevation:5, zIndex:100, padding:10, alignSelf:'center', width:WIDTH*0.75, alignItems:'center', borderRadius:50}}>
                <Text style={{textTransform:'uppercase', fontSize:20, fontWeight:'700', color:color.white, letterSpacing:1.5}}>Add New Service</Text>
            </View>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({})
