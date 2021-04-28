import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'

import CONSTANT from './navigationConstant.json'

import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {AuthConsumer} from '../context/auth'

import {navigationRef} from './RootNavigation';

import MainScreen from '../screen/main/index'
import LoginScreen from '../screen/auth/login'
import SignupScreen from '../screen/auth/signup'
import LoadingScreen from '../screen/Loading'

import OrderStackNavigator from './Service'
import CustomerStackNavigator from './CustomerNavigation'

import color from '../asset/styles/color'

import { verifyToken } from '../hooks/useAuth'

const Index = () => {
    const Stack = createStackNavigator()
    
    const {state, setAuth} = AuthConsumer()

    const [Loading, setLoading] = useState(true)

    useEffect(()=>{
        const result = verifyToken().then(response=>{setAuth(response); setLoading(false)})
    },[])

    const MyTheme = {
        ...DefaultTheme,
        colors: {
            background: color.Background,
        },
    };

    return (<NavigationContainer ref={navigationRef} theme={MyTheme}>
                {!state.auth?
                    <Stack.Navigator headerMode={false}>
                        {Loading && <Stack.Screen name={CONSTANT.Loading} component={LoadingScreen}/>}
                        <Stack.Screen name={CONSTANT.Login} component={LoginScreen}/>
                        <Stack.Screen name={CONSTANT.SignUp} component={SignupScreen}/>
                    </Stack.Navigator>
                    :
                    <Stack.Navigator headerMode={false}>
                        {Loading && <Stack.Screen name={CONSTANT.Loading} component={LoadingScreen}/>}
                        <Stack.Screen name={CONSTANT.Home} component={MainScreen}/>
                        <Stack.Screen name={CONSTANT.Service} component={OrderStackNavigator}/>
                        <Stack.Screen name={CONSTANT.Customer} component={CustomerStackNavigator}/>
                    </Stack.Navigator>
                }
            </NavigationContainer>
    )
}

export default Index

