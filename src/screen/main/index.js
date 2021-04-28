import React, {useState, useRef} from 'react'
import { StyleSheet, Text, TouchableOpacity, Dimensions , Image,Animated} from 'react-native'

import color from '../../asset/styles/color'

import {View, AnimatePresence} from 'moti'

import BottomSheet from './bottomSheet'
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5,MaterialIcons, SimpleLineIcons} from '@expo/vector-icons';

const HEIGHT = Dimensions.get('screen').height
const IMAGE_SIZE = 150

const Index = ({navigation}) => {
    
    const [isOpen, setOpen] = useState(false)

    return (
        <View style={{flex:1, padding:20}}>
        <View style={{height:HEIGHT*0.25, marginTop:20}}>
            <AnimatePresence>
                {!isOpen ?
                    <View>
                        <LinearGradient colors={['#00ffd0','#0090ff']} style={{alignSelf:'center', borderRadius:100, padding:5, marginBottom:20}}>
                            <Image style={{height:IMAGE_SIZE,alignSelf:'center',width:IMAGE_SIZE, borderRadius:100}} source={require('../../asset/styles/Images/me.jpg')}/>
                        </LinearGradient>
                        <View style={{alignItems:'center'}}>
                            <Text style={{color: color.white, fontSize:25, fontWeight:'700', textTransform:'uppercase', letterSpacing:2}}>Dhruv Aggarwal</Text>
                        </View>
                    </View>
                    :
                    <View style={{height:'60%',justifyContent:'center'}}>  
                        <Text style={{color:color.white, fontSize:18}}>Welcome Back!</Text>
                        <Text style={{color:color.white, fontWeight:'700', fontSize:25, textTransform:'uppercase', letterSpacing:2}}>Dhruv Aggarwal</Text>
                    </View>
                }
            </AnimatePresence>
            </View>
            <Text>{'\n'}</Text>
            <View style={{height:HEIGHT*0.8}}>
                <TouchableOpacity activeOpacity={0.8} style={styles.list}>
                    <FontAwesome5 name="user-edit" size={24} color={color.gray} />
                    <Text style={styles.options}>Edit Personal Details</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.list}>
                    <MaterialIcons name="account-balance" size={30} color={color.gray} />
                    <Text style={styles.options}>Edit Account Details</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.list}>
                    <SimpleLineIcons name="logout" size={24} color={color.gray}/>
                    <Text style={[styles.options, {marginLeft:18}]}>Logout</Text>
                </TouchableOpacity>
            </View>
            <BottomSheet foo={setOpen} navigation={navigation}/>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    list:{
        padding:10,
        paddingVertical:20,
        alignItems:'center',
        flexDirection:'row',
    },
    info:{
        alignItems:'center'
    },
    options:{
        fontSize:20,
        color:color.gray,
        marginLeft:10
    }
    
})
