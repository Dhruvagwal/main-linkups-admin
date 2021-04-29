import moment from 'moment'
import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'

import color from '../../asset/styles/color'

import CONSTANT from '../../navigation/navigationConstant.json'

import {OrderListView} from '../order'

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width

const IMAGE_SIZE = 200

const AccountDetail = ({navigation}) => {
    return (
        <View style={{flex:1}}>
            <ScrollView>
                <View style={{height:HEIGHT*.1}}/>
                <View style={{flex:1, width:WIDTH*.95, alignSelf:'center'}}>
                    <Image source={require('../../asset/styles/Images/me.jpg')} style={{height:IMAGE_SIZE, width:IMAGE_SIZE, borderRadius:IMAGE_SIZE, alignSelf:'center', zIndex:100}}/>

                    <View style={{backgroundColor:color.black, padding:10, marginTop:-IMAGE_SIZE/2, borderRadius:10, flex:.95, paddingTop:IMAGE_SIZE/2+10, marginBottom:'3%'}}>
                        <Text style={{color:color.notification, textTransform:'uppercase', fontWeight:'700', fontSize:25, alignSelf:'center', letterSpacing:2}}>Dhruv Aggarwal</Text>
                        <Text>{'\n'}</Text>
                        <View style={{padding:10}}>
                            <Text style={{color:color.white, fontSize:16,textTransform:'uppercase', alignSelf:'center', marginBottom:10, letterSpacing:1.5}}>Customer Detail</Text>
                            <View style={{marginBottom:10}}>
                                <Text style={[styles.info,{color:color.Secondary}]}>Address:</Text>
                                <Text style={[styles.info,{fontSize:16, marginLeft:10}]}>C-block, sector-5,Delhi-110053</Text>
                            </View>
                            <View style={{marginBottom:10}}>
                                <Text style={[styles.info,{color:color.Secondary}]}>Phone Number:</Text>
                                <Text style={[styles.info,{fontSize:16, marginLeft:10}]}>+918595771213</Text>
                            </View>
                            <View style={{marginBottom:10}}>
                                <Text style={[styles.info,{color:color.Secondary}]}>Customer Since:</Text>
                                <Text style={[styles.info,{fontSize:16, marginLeft:10}]}>{moment(new Date()).format('LLL')}</Text>
                            </View>
                        </View>
                        <Text>{'\n'}</Text>
                        <View style={{padding:10}}>
                            <Text style={{color:color.white, fontSize:16,textTransform:'uppercase', alignSelf:'center', marginBottom:10, letterSpacing:1.5}}>Order History</Text>
                            <OrderListView foo={()=>navigation.navigate(CONSTANT.Order,{screen:CONSTANT.OrderDetail})}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default AccountDetail

const styles = StyleSheet.create({
    info:{
        color:color.white,
        letterSpacing:1.5
    }
})
