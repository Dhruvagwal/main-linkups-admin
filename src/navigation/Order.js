import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

import CONSTANT from './navigationConstant.json'

import {createStackNavigator} from '@react-navigation/stack'

import OrderListView from '../screen/order'

const Order = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator headerMode={false}>
            <Stack.Screen name={CONSTANT.OrderList} component={OrderListView}/>
        </Stack.Navigator>
    )   
}

export default Order

const styles = StyleSheet.create({})