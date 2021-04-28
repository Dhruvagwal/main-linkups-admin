import React, {useState} from 'react'
import { StyleSheet, Text, View, Dimensions, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import color from '../../asset/styles/color'

import BottomSheet,{BottomSheetScrollView} from '@gorhom/bottom-sheet'

import { FontAwesome5, Feather, AntDesign, MaterialIcons } from '@expo/vector-icons'; 

import CONSTANT from '../../navigation/navigationConstant.json'

const HEIGHT = Dimensions.get('screen').height

const ICON_SIZE = 50

const bottomSheet = ({foo, navigation:{navigate}}) => {
    const [Height, setHeight] = useState(HEIGHT*0.75)
    return (
            <BottomSheet
                initialSnapIndex ={0}
                onAnimate={()=>{setHeight(HEIGHT*0.10)}}
                onChange={()=>foo(state=>!state)}
                snapPoints={[Height, HEIGHT*0.75]}
                handleComponent={()=><View style={{borderWidth:2,borderRadius:10, alignSelf:'center',borderColor:color.Secondary, margin:10, width:70}}/>}
                 backgroundComponent={() =>
                        <View style={styles.contentContainer}/>
                }
            > 
                <Text style={{margin:20,marginTop:25,fontSize:20,textAlign:'center',opacity:0.7, color:color.white, fontWeight:'700', letterSpacing:2, textTransform:'uppercase'}}>SHREE RAM NIVAS STORE</Text>
                <BottomSheetScrollView>
                    <View style={{justifyContent:'center' ,height:HEIGHT*0.6}}>
                        <View style={{flexDirection:'row',justifyContent:'center'}}>

                            <Pressable onPress={()=>navigate(CONSTANT.Customer)} style={{width:'45%', margin:5}}>
                                <LinearGradient start={{x: 0, y:1}} end={{ x: 1, y: 0 }} colors={['#713CF2','#467AF1' ,'#1DB4F1']} style={styles.category}>
                                    <FontAwesome5 name="users" size={ICON_SIZE} color={color.white} />
                                    <Text style={styles.label}>Customers</Text>
                                </LinearGradient>
                            </Pressable>

                            <Pressable onPress={()=>navigate(CONSTANT.Customer)} style={{width:'45%', margin:5}}>
                                <LinearGradient start={{x: 0, y:1}} end={{ x: 1, y: 0 }} colors={['#fc0097','#FD55A7' ,'#FD55A7']} style={styles.category}>
                                    <Feather name="shopping-cart" size={ICON_SIZE} color={color.white} />
                                    <Text style={styles.label}>Orders</Text>
                                </LinearGradient>
                            </Pressable>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'center'}}>
                            <Pressable onPress={()=>navigate(CONSTANT.Service)} style={{width:'45%', margin:5}}>
                                <LinearGradient start={{x: 0, y:1}} end={{ x: 1, y: 0 }} colors={['#327EDB','#23B4BC' ,'#1AD3A4']} style={styles.category}>
                                    <AntDesign name="customerservice" size={ICON_SIZE} color={color.white} />
                                    <Text style={styles.label}>Services</Text>
                                </LinearGradient>
                            </Pressable>
                            
                            <Pressable onPress={()=>navigate(CONSTANT.Customer)} style={{width:'45%', margin:5}}>
                                <LinearGradient start={{x: 0, y:1}} end={{ x: 1, y: 0 }} colors={['#FBBB68','#F39764' ,'#F06F61']} style={styles.category}>
                                    <MaterialIcons name="payment" size={ICON_SIZE} color={color.white} />
                                    <Text style={styles.label}>Payments</Text>
                                </LinearGradient>
                            </Pressable>
                        </View>
                    </View>
                </BottomSheetScrollView>
            </BottomSheet>
    )
}

export default bottomSheet

const styles = StyleSheet.create({
  contentContainer: {
    ...StyleSheet.absoluteFillObject,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: color.black,
  },
  category:{
      padding:5,
      width:'100%',
      borderRadius:25,
      height:230,
      alignItems:'center',
      justifyContent:'center',
  },
  label:{
      fontSize:ICON_SIZE*0.3,
      textTransform:'uppercase',
      letterSpacing:2,
      fontWeight:'700',
      color: color.white,
      marginTop:10
  }
})

