import React, {useEffect} from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions, Pressable, ScrollView } from 'react-native'

import BottomSheet,{BottomSheetScrollView} from '@gorhom/bottom-sheet'

import OrderList from '../order'
import ServiceList from '../service'
import AccountList from '../account'
import ProfileList from '../profile'
import Home from './home'

import {DataConsumer} from '../../context/data'

const Index = ({navigation}) => {
    const DATA = [<Home/>,<OrderList/>, <ServiceList navigation={navigation}/>, <AccountList/>, <ProfileList/>]
    return (
        <View style={{flex:1}}>
            {/* <FlatList
                data= {DATA}
                snapToInterval={Dimensions.get('screen').width}
                bounces={false}
                decelerationRate={0.8}
                showsHorizontalScrollIndicator={false}
                horizontal
                keyExtractor={()=>Math.random().toString()}
                renderItem = {({item})=>{
                    return item              
                }}  
            /> */}
            <BottomSheet
                initialSnapIndex ={0}
                snapPoints={[42,0]}
            >

            </BottomSheet>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({})
