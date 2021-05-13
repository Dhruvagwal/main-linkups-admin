import React from 'react'
import { StyleSheet, Dimensions, Image, FlatList, TextInput, ScrollView, ImageBackground, Pressable } from 'react-native'

import CONSTANT from '../../navigation/navigationConstant.json'

import {Text} from 'styles'
import color from 'colors'

import { FontAwesome, Ionicons, Entypo } from '@expo/vector-icons'; 

import {View} from 'moti'

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width

const IMAGE_SIZE = 70
const OrderListView = ({foo, data={service:{}}, user={}})=>{
    return <Pressable onPress={foo} style={{backgroundColor:color.elevatedDark, opacity:0.95, borderRadius:5, padding:10, marginVertical:10,flexDirection:'row', alignItems:'center', elevation:5, justifyContent:'space-between'}}>
        <View>
            <Text regular size={16} adjustsFontSizeToFit numberOfLines={1}>{user.Name}</Text>
            <Text style={{opacity:0.7}}>Status: <Text style={{color:color.active}} bold>Pending</Text></Text>
        </View>
        <View style={{alignItems:'flex-end'}}>
            <Text style={{color:color.inActive}} regular size={12}>Electric Motor Repair</Text>
            <Text style={{opacity:0.7, color:color.active}} bold size={20}>₹{data.service.price*data.Quantity}</Text>
        </View>
    </Pressable>
}

const Index = ({navigation}) => {
    return (
        <View 
            from={{opacity:0}} 
            animate={{opacity:1}} 
            transition={{
                loop: false,
                type: 'timing',
                duration: 500,
                delay: 100,
            }}
            style={{flex:1}}>
                <View style={{height:HEIGHT*.1}}/>
                <View style={{height:HEIGHT*.25, padding:10, paddingRight:0}}>
                    <FlatList
                        data={['car','bike','cycle','plane']}
                        keyExtractor={item=>item}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        snapToInterval={WIDTH*0.92}
                        decelerationRate={0.8}
                        renderItem={()=>{
                            return <View style={{width:WIDTH*0.9,backgroundColor:color.lightDark, margin:5, opacity:0.95, borderRadius:10, padding:10}}>
                                <Text adjustsFontSizeToFit numberOfLines={1} style={{fontSize:20, letterSpacing:1.5, color:color.white, fontWeight:'700', marginBottom:10}}>Rahul is Your Customer Now!</Text>
                                <Text>Say Hy to Rahul</Text>
                                <Text style={{position:'absolute', bottom:10, right:10, color:color.active}}>Click to know more</Text>
                            </View>
                        }}
                    />
                </View>
                <View style={{backgroundColor:color.lightDark,width:WIDTH*0.95, alignSelf:'center', opacity:.95, borderRadius:5, flexDirection:'row', alignItems:'center'}}>
                    <FontAwesome name="search" size={20} color={color.white} style={{marginHorizontal:10}}/>
                    <TextInput placeholder='Search Order' placeholderTextColor={color.white} style={{color:color.white, padding:10,fontSize:18, width:WIDTH*0.8}}/>
                </View>              
                <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
                    <View style={{margin:10, marginTop:25}}>
                            <Text style={{color:color.white, textTransform:'uppercase', letterSpacing:1.8}}>Your Customers</Text>
                            <OrderListView foo={()=>navigation.navigate(CONSTANT.OrderDetail)}/>
                    </View>
                </ScrollView>
        </View>
    )
}

export default Index

export {OrderListView}

const styles = StyleSheet.create({
})
