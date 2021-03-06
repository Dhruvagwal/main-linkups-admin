import moment from 'moment'
import React, {useEffect, useState} from 'react'
import { StyleSheet,View, Dimensions, Image, ScrollView } from 'react-native'

import {Text} from 'styles'
import color from 'colors'

import CONSTANT from '../../navigation/navigationConstant.json'

import {OrderListView} from '../order'

import { getOrderDetailByCustomerId } from 'hooks/Data'

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width

const IMAGE_SIZE = 200

const AccountDetail = ({navigation, route}) => {
    const {data} = route.params
    const [Orderdata, setData] = useState([])
    useEffect(() => {
        getOrderDetailByCustomerId(data.id).then(({data}) => setData(data))
        return () => {}
    }, [])
    return (
        <View style={{flex:1}}>
            <ScrollView>
                <View style={{height:HEIGHT*.1}}/>
                <View style={{flex:1, width:WIDTH*.95, alignSelf:'center'}}>
                    <Image source={require('../../asset/styles/Images/me.jpg')} style={{height:IMAGE_SIZE, width:IMAGE_SIZE, borderRadius:IMAGE_SIZE, alignSelf:'center', zIndex:100}}/>

                    <View style={{backgroundColor:color.elevatedDark, padding:10, marginTop:-IMAGE_SIZE/2, borderRadius:10, flex:.95, paddingTop:IMAGE_SIZE/2+10, marginBottom:'3%'}}>
                        <Text style={{alignSelf:'center', textTransform:'uppercase'}} size={25} bold>{data.Name}</Text>
                        <Text>{'\n'}</Text>
                        <View style={{padding:10}}>
                            <Text style={{color:color.white, fontSize:16,textTransform:'uppercase', alignSelf:'center', marginBottom:10, letterSpacing:1.5}}>Customer Detail</Text>
                            <View style={{marginBottom:10}}>
                                <Text style={{color:color.inActive}}>Address:</Text>
                                <Text style={{fontSize:16, marginLeft:10}} regular>C-block, sector-5,Delhi-110053</Text>
                            </View>
                            <View style={{marginBottom:10}}>
                                <Text style={{color:color.inActive}}>Phone Number:</Text>
                                <Text style={{fontSize:16, marginLeft:10}} regular>+91 {data.id.replace('91','')}</Text>
                            </View>
                            <View style={{marginBottom:10}}>
                                <Text style={{color:color.inActive}}>Customer Since:</Text>
                                <Text style={{fontSize:16, marginLeft:10}} regular >{moment(new Date()).format('LLL')}</Text>
                            </View>
                        </View>
                        <Text>{'\n'}</Text>
                        <View style={{padding:10}}>
                            <Text style={{color:color.white, fontSize:16,textTransform:'uppercase', alignSelf:'center', marginBottom:10, letterSpacing:1.5}}>Order History</Text>
                            {
                                Orderdata.map((item)=><OrderListView data={item} user={data} key={item.id} foo={()=>navigation.navigate(CONSTANT.Order,{screen:CONSTANT.OrderDetail})}/>)
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default AccountDetail

const styles = StyleSheet.create({
})
