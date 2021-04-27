import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

import CONSTANT from './navigationConstant.json'

import {createStackNavigator} from '@react-navigation/stack'

import AddServiceScreen from '../screen/service/AddService'
import ServiceDescriptionScreen from '../screen/service/ServiceDescription'

const Service = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator headerMode={false}>
            <Stack.Screen name={CONSTANT.AddService} component={AddServiceScreen}/>
            <Stack.Screen name={CONSTANT.ServiceDescription} component={ServiceDescriptionScreen}/>
        </Stack.Navigator>
    )   
}

export default Service

const styles = StyleSheet.create({})
