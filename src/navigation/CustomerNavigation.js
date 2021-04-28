import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

import CONSTANT from './navigationConstant.json'

import {createStackNavigator} from '@react-navigation/stack'

import CustomerList from '../screen/account/index'

const Customer = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator headerMode={false}>
            <Stack.Screen name={CONSTANT.CustomerList} component={CustomerList}/>
        </Stack.Navigator>
    )   
}

export default Customer

const styles = StyleSheet.create({})
