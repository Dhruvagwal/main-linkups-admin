import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, Button, TouchableOpacity,View} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

import CONSTANT from '../../navigation/navigationConstant.json'


import {AuthConsumer} from '../../context/auth'

import { LinearGradient } from 'expo-linear-gradient';



import {signInWithPhoneNumber, confirmOTP} from '../../hooks/useAuth'

import styles from './css'

import color from '../../asset/styles/color'

const Login = ({navigation}) => {

    const {setAuth} = AuthConsumer()
    const [PhoneNumber, setPhoneNumber] = useState(null)

    const [Code, setCode] = useState(null)

    const [confirm, setConfirm] = useState(false)

    const [timer, setTimer] = useState(60)

    const LoginUser = async ()=>{
        setConfirm(true)
        setTimer(60)
        const result = await signInWithPhoneNumber(PhoneNumber)
        !result && navigation.navigate(CONSTANT.Login)   
    }

    const confirmOtp = async ()=>{
        const result = await confirmOTP(PhoneNumber, Code)
        result?setAuth(true):setConfirm(false)  
    }
    (confirm && timer>0) && setTimeout(()=>{setTimer(timer-1)},1000)      

    if(confirm){
        return (
            <View style={styles.Container}>
                <LinearGradient 
                    colors={[color.blue, color.purple]}
                    style={styles.Form}
                >
                    <View style={styles.holder}>
                        <View style={{width:'75%'}}>
                            <TextInput onChangeText={setCode} placeholderTextColor={color.gray} value={Code} style={styles.TextInput} keyboardType={'numeric'} placeholder='Enter OTP'/>
                            <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
                                <Text style={{color:color.gray}}>{timer} sec left</Text>
                                <TouchableOpacity disabled={timer===0 ? false:true}  onPress={LoginUser} style={{alignSelf:'flex-end'}}>
                                    <Text style={{color:color.gray, opacity:timer===0 ? 1:0.5}}>Resend OTP ?</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.icon} onPress={confirmOtp}>
                            <AntDesign name="arrowright" size={24} color={color.white} />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        )
    }
    return (
        <View style={styles.Container}>
            <LinearGradient 
                colors={[color.blue, color.purple]}
                style={styles.Form}
            >
                <View style={{width:'100%'}}>
                    <View style={styles.holder}>
                        <TextInput onChangeText={setPhoneNumber} placeholderTextColor={color.gray} value={PhoneNumber} style={[styles.TextInput,{width:'75%'}]} keyboardType={'numeric'} placeholder='Phone Number'/>
                        <TouchableOpacity style={styles.icon} onPress={LoginUser}>
                            <AntDesign name="arrowright" size={24} color={color.white} />
                        </TouchableOpacity>
                    </View>
                        <TouchableOpacity onPress={()=>navigation.navigate(CONSTANT.SignUp)} style={{marginTop:25}}>
                            <Text style={styles.SignUp}>Don't Have An Account? SignUp</Text>
                        </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    )
}

export default Login
