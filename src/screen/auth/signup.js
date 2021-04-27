import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity,Dimensions } from 'react-native'

import CONSTANT from '../../navigation/navigationConstant.json'

import color from '../../asset/styles/color'
import { AntDesign } from '@expo/vector-icons'; 

import {AuthConsumer} from '../../context/auth'


import {signUpWithPhoneNumber, confirmOTP, createSellerUser} from '../../hooks/useAuth'
import { LinearGradient } from 'expo-linear-gradient';


import styles from './css'

const HEIGHT = Dimensions.get('screen').height
const SignUp = ({navigation}) => {

    const {setAuth} = AuthConsumer()
    const [Name, setName] = useState(null)
    const [PhoneNumber, setPhoneNumber] = useState(null)
    const [timer, setTimer] = useState(60)
    
    const [Code, setCode] = useState(null)

    const [confirm, setConfirm] = useState(false)

    const createUser = async ()=>{
        setConfirm(true)
        setTimer(60)
        const result = await signUpWithPhoneNumber(PhoneNumber)
        !result && navigation.navigate(CONSTANT.Login) 
    }

    (confirm && timer>0) && setTimeout(()=>{setTimer(timer-1)},1000)      

    const confirmOtp = async ()=>{
        const result = await confirmOTP(PhoneNumber, Code)
        if(result){
            await createSellerUser(PhoneNumber, Name).then((response)=>setAuth(response))
        }else{
            setConfirm(false)
        }       
    }
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
                                <TouchableOpacity disabled={timer===0 ? false:true}  onPress={createUser} style={{alignSelf:'flex-end'}}>
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
                style={[styles.Form, {height:HEIGHT/3}]}
            >
                <View style={{alignItems:'center',marginBottom:20}}>
                    <TextInput onChangeText={setName} placeholderTextColor={color.gray} value={Name} style={[styles.TextInput,{width:'75%'}]} keyboardType={'numeric'} placeholder='Name'/>
                    <TextInput onChangeText={setPhoneNumber} placeholderTextColor={color.gray} value={PhoneNumber} style={[styles.TextInput,{width:'75%', marginTop:20}]} keyboardType={'numeric'} placeholder='Phone Number'/>
                </View>
                
                <TouchableOpacity style={[styles.icon, {marginTop:10,flexDirection:'row', width:'50%', alignSelf:'center', alignItems:'center', justifyContent:'center'}]} onPress={createUser}>
                    <Text style={{color:color.white, textTransform:'uppercase', letterSpacing:2, marginRight:10}}>Sign Up</Text>
                    <AntDesign name="arrowright" size={24} color={color.white} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate(CONSTANT.Login)} style={{marginTop:25}}>
                    <Text style={styles.SignUp}>Have An Account? Login</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    )
}

export default SignUp
