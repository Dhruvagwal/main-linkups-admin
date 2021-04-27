import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

import CONSTANT from './navigationConstant.json'

import {createStackNavigator} from '@react-navigation/stack'

import AddServiceScreen from '../screen/service/AddService'

const Service = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator headerMode={false}>
            <Stack.Screen name={CONSTANT.AddService} component={AddServiceScreen}/>
        </Stack.Navigator>
    )   
}

export default Service

const styles = StyleSheet.create({})
