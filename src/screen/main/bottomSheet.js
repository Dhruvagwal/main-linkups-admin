import React, {useState} from 'react'
import { StyleSheet,  View, Dimensions, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import {Text} from 'styles'
import color from 'colors'

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
                <Text style={{margin:20,marginTop:25,fontSize:20,textAlign:'center', letterSpacing:1.5, textTransform:'uppercase'}} bold>SHREE RAM NIVAS STORE</Text>
                <BottomSheetScrollView>
                    <View style={{justifyContent:'center' ,height:HEIGHT*0.6}}>
                        <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <Pressable onPress={()=>navigate(CONSTANT.Customer)} style={styles.category}>
                                    <FontAwesome5 name="users" size={ICON_SIZE} color={color.white} />
                                    <Text regular style={styles.label}>Customers</Text>
                            </Pressable>

                            <Pressable onPress={()=>navigate(CONSTANT.Order)} style={styles.category}>
                                    <Feather name="shopping-cart" size={ICON_SIZE} color={color.white} />
                                    <Text regular style={styles.label}>Orders</Text>
                            </Pressable>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'center'}}>
                            <Pressable onPress={()=>navigate(CONSTANT.Service,{screen:CONSTANT.ServiceListView})} style={styles.category}>
                                    <AntDesign name="customerservice" size={ICON_SIZE} color={color.white} />
                                    <Text regular style={styles.label}>Services</Text>
                            </Pressable>
                            
                            <Pressable onPress={()=>navigate(CONSTANT.Order,{screen:CONSTANT.PaymentListView})} style={styles.category}>
                                    <MaterialIcons name="payment" size={ICON_SIZE} color={color.white} />
                                    <Text regular style={styles.label}>Payments</Text>
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
    backgroundColor: color.elevatedDark,
  },
  category:{
      padding:5,
      width:'45%',
      height:230,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:color.active,
      borderRadius:25,
      margin:5
  },
  label:{
      fontSize:ICON_SIZE*0.3,
      textTransform:'uppercase',
      letterSpacing:2,
      color: color.white,
      marginTop:10
  }
})

