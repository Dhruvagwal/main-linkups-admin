import moment from 'moment'
import React from 'react'
import { StyleSheet, Text, View, Pressable, Dimensions, ScrollView, Image } from 'react-native'

import color from '../../asset/styles/color'
import CONSTANT from '../../navigation/navigationConstant.json'

import DoubleClick from 'react-native-double-click';

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width

const orderDetail = ({navigation: {navigate}}) => {
    return (
        <View style={{flex:1}}>
            <View style={{height:HEIGHT*.1}}/>
            <ScrollView style={{padding:10}}>
                <Pressable onPress={()=>navigate(CONSTANT.Customer, {screen:CONSTANT.CustomerDetail})} style={{marginLeft:20}}>
                    <Text style={{fontSize:20, letterSpacing:2, textTransform:'uppercase', color:color.notification, fontWeight:'700'}}>Dhruv Aggarwal</Text>
                </Pressable>
                <View style={{padding:20,marginTop:10, backgroundColor:color.black, borderRadius:10}}>
                    <View>
                        <Pressable onPress={()=>navigate(CONSTANT.Service)}>
                            <Text style={{color:color.lightBlue, fontSize:20,fontWeight:'700' ,textTransform:'uppercase', letterSpacing:1.7}}>Electric Motor Repair</Text>
                        </Pressable>
                        <Text style={{color:color.white}}>Order Placed at {moment(new Date()).format('LLL')}</Text>
                    </View>
                    <Text>{'\n'}</Text>
                    <View style={{flexDirection:'row', alignItems:'center', marginVertical:5}}>
                        <Text style={{color:color.Secondary, fontSize:18}}>Price: </Text>
                        <Text style={{color:color.white, fontSize:25, fontWeight:'700'}}>₹550</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', marginVertical:5}}>
                        <Text style={{color:color.Secondary, fontSize:18}}>Status: </Text>
                        <Text style={{color:color.lightGreen, fontSize:20, fontWeight:'700'}}>Received</Text>
                    </View>
                    <View style={{marginVertical:5}}>
                        <Text style={{color:color.Secondary, fontSize:18, marginBottom:5}}>Media: </Text>
                        <Image source={{uri:'https://wallpaperaccess.com/full/2881082.jpg'}} style={{width:WIDTH*0.85,borderRadius:5, height:200, alignSelf:'center'}}/>
                    </View>
                    <View style={{marginVertical:5}}>
                        <Text style={{color:color.Secondary, fontSize:18}}>Description: </Text>
                        <Text style={{color:color.white, fontSize:18, textAlign:'justify'}}>Once Upon a time</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={{position:'absolute', bottom:10, alignSelf:'center'}}>
                <View style={{flexDirection:'row'}}>
                    <DoubleClick style={[styles.button, {backgroundColor:color.lightGreen}]}>
                        <Text style={{color:color.white}}>Accept</Text>
                    </DoubleClick>
                    <DoubleClick style={[styles.button, {backgroundColor:color.red}]}>
                        <Text style={{color:color.white}}>Decline</Text>
                    </DoubleClick>
                </View>
                <Text style={{alignSelf:'center', color:color.Secondary, marginTop:10}}>Double click to Accept or Decline</Text>
            </View>
        </View>
    )
}

export default orderDetail

const styles = StyleSheet.create({
    button:{
        width:WIDTH*.4,alignItems:'center', 
        padding:15, 
        borderRadius:5,
        marginHorizontal:10
    }
})
