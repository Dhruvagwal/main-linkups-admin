import React, {useEffect} from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'

import OrderList from '../order'
import ServiceList from '../service'
import AccountList from '../account'
import ProfileList from '../profile'
import Home from './home'

import {DataConsumer} from '../../context/data'

const Index = ({navigation}) => {
    return (
        <View style={{flex:1}}>
            <FlatList
                data= {[<Home/>,<OrderList/>, <ServiceList navigation={navigation}/>, <AccountList/>, <ProfileList/>]}
                snapToInterval={Dimensions.get('screen').width}
                bounces={false}
                decelerationRate={0.8}
                showsHorizontalScrollIndicator={false}
                horizontal
                keyExtractor={()=>Math.random().toString()}
                renderItem = {({item})=>{
                    return item              
                }}
            />
        </View>
    )
}

export default Index

const styles = StyleSheet.create({})
