import React, {useState} from 'react'
import { StyleSheet, Dimensions, View, FlatList, Pressable, Image, ScrollView, ImageBackground } from 'react-native'

import { Feather, MaterialIcons,FontAwesome5, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 

import * as RootNavigation from 'navigation/RootNavigation'
import CONSTANT  from 'navigation/navigationConstant'

import {Text, RowView} from 'styles'
import color from 'colors'

const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height

const Category = ({icon})=>{
    const CATEGORY_SIZE = 90
    const [active, setActive] = useState(false)
    return <View style={{height:HEIGHT*0.17}}>
        <Pressable onPress={()=>setActive(active=>!active)} style={{
            backgroundColor:active? color.active: color.lightDark, 
            width:CATEGORY_SIZE, 
            height:CATEGORY_SIZE, 
            borderRadius:30, 
            marginHorizontal:10, 
            justifyContent:'center', 
            alignItems:'center'}}>
               {icon} 
        </Pressable>
        {active && <View style={{backgroundColor:color.active, padding:5,borderRadius:100, alignSelf:'center', marginTop:10}}/>}
    </View>

}

const PRODUCT_HEIGHT = 250
const PRODUCT_WIDTH = 200
const ProductList = ()=>{
    const [like, setLike] = useState(false)
    const uri = 'https://www.serviceonwheel.com/uploads/service/805621584075079.jpg'
    return <Pressable onPress={()=>RootNavigation.navigate(CONSTANT.ServiceProvider)} style={{marginHorizontal:15}}>
        <Image source={{uri}} style={{height:PRODUCT_HEIGHT, width:PRODUCT_WIDTH, borderRadius:30, opacity:.9}}/>
        <Pressable onPress={()=>setLike(like=>!like)} style={{position:'absolute', right:15, top:15}}>
            <AntDesign name="heart" size={30} color={like?color.active:color.white} />
        </Pressable>
        <Text style={styles.price} regular>₹ 500</Text>
        <RowView style={{justifyContent:'space-between', marginTop:10}}>
            <Text style={{ width:PRODUCT_WIDTH/1.5}} regular>Ajay Mehra</Text>
            <RowView>
                <AntDesign name="star" size={24} color={color.active} />
                <Text>4.5</Text>
            </RowView>
        </RowView>
    </Pressable>
}

const SubCategory = ({width=300})=>{
    const uri = 'https://www.scitech.edu/static/image/programs/general-electrician/electrician-student-lab-work.jpg'
    return <ImageBackground source={{uri}} style={{width, height:180, marginHorizontal:15, borderRadius:20, overflow:'hidden', marginBottom:20}}>
                <View style={{backgroundColor:'rgba(0,0,0,0.6)', flex:1}}>
                    <Text style={{margin:10}} size={30} bold>AC Repair</Text>
                    <Text style={{...styles.price,top:100}} regular>₹ 510</Text>
                </View>
        </ImageBackground>
}
export {ProductList, SubCategory}

const styles = StyleSheet.create({
    Input:{
        backgroundColor:color.lightDark, 
        width:WIDTH*.2, 
        borderRadius:100, 
        height:50,
        justifyContent:'flex-end',
        opacity:0.7,
        padding:5
    },
    price:{
        position:'absolute',
        top:PRODUCT_HEIGHT/1.5,
        backgroundColor:color.dark, 
        alignSelf:'flex-start', 
        padding:10,
        borderTopRightRadius:100,
        borderBottomRightRadius:100,
        color:color.active
    }
})
