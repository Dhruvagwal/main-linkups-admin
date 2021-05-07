import React, {useState, useRef, useEffect} from 'react'
import { StyleSheet, TouchableOpacity, Dimensions , Image,Animated} from 'react-native'

import color from '../../asset/styles/color'
import {Text} from 'styles'

import CONSTANT from '../../navigation/navigationConstant.json'

import {View, AnimatePresence} from 'moti'
import {DataConsumer} from 'context/data'

import BottomSheet from './bottomSheet'
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5,MaterialIcons, SimpleLineIcons} from '@expo/vector-icons';

const HEIGHT = Dimensions.get('screen').height
const IMAGE_SIZE = 150

const Index = ({navigation}) => {
    const {state:{profile}} = DataConsumer()
    const [isOpen, setOpen] = useState(false)

    return (
        <View style={{flex:1, padding:20, paddingTop:50}}>
        <View style={{height:HEIGHT*0.25, marginTop:20}}>
            <AnimatePresence>
                {!isOpen ?
                    <View>
                        <LinearGradient colors={['#00ffd0','#0090ff']} style={{alignSelf:'center', borderRadius:100, padding:5, marginBottom:20}}>
                            <Image style={{height:IMAGE_SIZE,alignSelf:'center',width:IMAGE_SIZE, borderRadius:100}} source={{uri:profile.imageUri}}/>
                        </LinearGradient>
                        <View style={{alignItems:'center'}}>
                            <Text size={30} regular style={{textTransform:'uppercase', letterSpacing:2}}>{profile.name}</Text>
                        </View>
                    </View>
                    :
                    <View style={{height:'60%',justifyContent:'center'}}>  
                        <Text style={{color:color.white, fontSize:18}}>Welcome Back!</Text>
                        <Text size={30} regular style={{letterSpacing:2}}>{profile.name}</Text>
                    </View>
                }
            </AnimatePresence>
            </View>
            <Text>{'\n'}</Text>
            <View style={{height:HEIGHT*0.8}}>
                <TouchableOpacity onPress={()=>navigation.navigate(CONSTANT.edit)} activeOpacity={0.8} style={styles.list}>
                    <FontAwesome5 name="user-edit" size={24} color={color.gray} />
                    <Text style={styles.options}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.list}>
                    <MaterialIcons name="account-balance" size={30} color={color.gray} />
                    <Text style={styles.options}>Edit Account Details</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.list}>
                    <SimpleLineIcons name="logout" size={24} color={color.gray}/>
                    <Text style={{marginLeft:18}} size={20}>Logout</Text>
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
