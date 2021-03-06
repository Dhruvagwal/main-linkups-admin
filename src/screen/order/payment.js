import React from 'react'
import { StyleSheet, Text, Dimensions, Image, FlatList, TextInput, ScrollView, ImageBackground } from 'react-native'

import color from '../../asset/styles/color'
import * as RootNavigation from '../../navigation/RootNavigation'

import moment from 'moment'

import { FontAwesome, AntDesign } from '@expo/vector-icons'; 

import {View} from 'moti'

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width

const IMAGE_SIZE = 70
const PaymentListView = ()=>{
    return <View style={{backgroundColor:color.black, opacity:0.95, borderRadius:5, padding:10, marginVertical:10,flexDirection:'row', alignItems:'center', elevation:5, justifyContent:'space-between'}}>
        <View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <AntDesign name="checkcircleo" size={24} color={color.lightGreen} />
                <Text style={{color: color.notification, textTransform:'uppercase', fontWeight:'700', fontSize:20, letterSpacing:1.7}}>{' '}Dhruv Aggarwal</Text>
            </View>
            <Text style={{color:color.Secondary}}>Payed at {moment(new Date()).format('LLLL')}</Text>
        </View>
        <View>
            <Text style={{fontSize:20, fontWeight:'700', letterSpacing:1.5, color:color.white}}>₹550</Text>
        </View>
    </View>
}

const Index = () => {
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
            style={{flex:1, backgroundColor:'red'}}>

                <Image source={require('../../asset/styles/Images/customerBg.png')} style={[StyleSheet.absoluteFillObject]}/>
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
                            return <View style={{width:WIDTH*0.9,backgroundColor:color.notification, margin:5, opacity:0.8, borderRadius:10, padding:10}}>
                                <Text adjustsFontSizeToFit numberOfLines={1} style={{fontSize:20, letterSpacing:1.5, color:color.gray, fontWeight:'700', marginBottom:10}}>Rahul is Your Customer Now!</Text>
                                <Text>Say Hy to Rahul</Text>
                                <Text style={{position:'absolute', bottom:10, right:10}}>Click to know more</Text>
                            </View>
                        }}
                    />
                </View>
                <View style={{backgroundColor:color.black,width:WIDTH*0.95, alignSelf:'center', opacity:.95, borderRadius:5, flexDirection:'row', alignItems:'center'}}>
                    <FontAwesome name="search" size={20} color={color.white} style={{marginHorizontal:10}}/>
                    <TextInput placeholder='Search Payments' placeholderTextColor={color.white} style={{color:color.white, padding:10,fontSize:18, width:WIDTH*0.8}}/>
                </View>              
                <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
                    <View style={{margin:10, marginTop:25}}>
                            <Text style={{color:color.white, textTransform:'uppercase', letterSpacing:1.8}}>Your Payments</Text>
                            <PaymentListView/>
                            <PaymentListView/>
                            <PaymentListView/>
                            <PaymentListView/>
                            <PaymentListView/>
                    </View>
                </ScrollView>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
})
