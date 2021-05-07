import React from 'react'
import {StyleSheet, View, Text, Dimensions, FlatList, Image, Pressable } from 'react-native'

import BottomSheet,{BottomSheetScrollView} from '@gorhom/bottom-sheet'

import { SimpleLineIcons,FontAwesome, AntDesign } from '@expo/vector-icons'; 

import {AccountListView} from '../account'

import color from '../../asset/styles/color'

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width

const IMAGE_WIDTH = WIDTH
const IMAGE_HEIGHT = HEIGHT*.8


const IMAGE_SIZE = 50

const DATA = ['https://wallpaperaccess.com/full/1301791.jpg','https://wallpapercave.com/wp/wp5835784.jpg','https://121quotes.com/wp-content/uploads/2019/09/red-lamborghini-wallpaper.jpg']
const Data = [1,2,3]

const Rating = ({width=0, Rate=0})=>{
    return <View style={[styles.row,{marginVertical:3, alignSelf:'center'}]}>
        <View style={{alignItems:'center', flexDirection:'row'}}>
            <Text style={{fontSize:20, color: color.white}}>{Rate} </Text>
            <AntDesign name="star" size={25} color={color.notification} />
        </View>
        <View style={[styles.row,{width:WIDTH*.75, height:15, backgroundColor:color.Secondary, borderRadius:100, marginLeft:10}]}>
            <View style={{backgroundColor:color.notification, height:15, width:`${width}%`, borderRadius:100}}/>
        </View>
    </View>
}

const FeedBackRating = ({SIZE=30, width=WIDTH*.75})=>{
    return <View style={{flexDirection:'row', justifyContent:'space-around', width, alignSelf:'center'}}>
            {
                Data.map(()=>{
                    return <AntDesign key={Math.random()} name="star" size={SIZE} color={color.notification} />
                })
            }
            <AntDesign name="staro" size={SIZE} color={color.notification} />
            <AntDesign name="staro" size={SIZE} color={color.notification} />
        </View>
}

const ServiceDescription = ({navigation:{navigate}}) => {


    return (
        <View style={{flex:1}}>
            <View style={{height:IMAGE_HEIGHT}}>
                <FlatList
                    data={DATA}
                    decelerationRate='fast'
                    snapToInterval={IMAGE_HEIGHT}
                    keyExtractor={()=>Math.random().toString()}
                    renderItem = {({item})=>{
                        return <Image source={{uri:item}} style={{height:IMAGE_HEIGHT, width:IMAGE_WIDTH}}/>
                    }}
                />
            </View>
            <View style={{position:'absolute', top:HEIGHT*.05, right: WIDTH*.05, zIndex:100}}>
                <Pressable style={{backgroundColor:color.lightBlue, padding:10, width:WIDTH*.2, alignItems:'center', borderRadius:5}}>
                    <Text>EDIT</Text>
                </Pressable>
            </View>
            <BottomSheet
                initialSnapIndex ={0}
                snapPoints={[HEIGHT*.29, HEIGHT*.9]}
                handleComponent={()=><View style={{borderWidth:2,borderRadius:10, alignSelf:'center',borderColor:color.Secondary, margin:10, width:70}}/>}
                 backgroundComponent={() =>
                        <View style={styles.contentContainer}/>
                }
            >
                <BottomSheetScrollView showsVerticalScrollIndicator={false} style={{width:WIDTH*.95, alignSelf:'center'}}>


                    <Text style={{width:WIDTH*.9, fontSize:30, color:color.lightGreen, textTransform:'uppercase', letterSpacing:1.5, fontWeight:'700'}}>Electric Motor Repair</Text>
                    <Text style={{color: color.Secondary, fontSize:17, letterSpacing:1.3}}>Bajaj Electric Motor Repair Fan Binding</Text>
                    <View style={{marginTop:10}}>
                        <View style={[styles.row, {alignItems:'flex-end'}]}>
                            <Text style={styles.text}>₹</Text>
                            <Text style={[styles.text,{fontSize:30, letterSpacing:2}]}>750</Text>
                        </View>
                        <Text style={[styles.text, {color:color.Secondary}]}>MRP : <Text style={{textDecorationLine:'line-through'}}>₹850</Text> <Text style={[styles.text,{color:color.red}]}> Save ₹100</Text></Text>
                        <Text style={styles.text}>Discount : 15%</Text>
                        <Text>{'\n'}</Text>

                        <View style={[styles.row,{alignSelf:'center'}]}>
                            <SimpleLineIcons name="badge" size={24} color={color.notification} />
                            <Text style={[{color:color.notification,fontSize:20, textTransform:'uppercase', letterSpacing:1.7, fontWeight:'700'}]}> 180 Days Warranty</Text>
                        </View>
                        <Text>{'\n'}</Text>
                        <Text style={[styles.text,{alignSelf:'center'}]}>Features From Linkups</Text>
                        <View style={{marginVertical:10, backgroundColor:color.yellow, alignSelf:'center',padding:10,borderRadius:100, width:WIDTH*.9, alignItems:'center'}}>
                            <Text style={{fontSize:18, textTransform:'uppercase', letterSpacing:1.5}}>Price Effective</Text>
                        </View>
                        <View style={{marginVertical:10, backgroundColor:color.brightGreen, alignSelf:'center',padding:10,borderRadius:100, width:WIDTH*.9, alignItems:'center'}}>
                            <Text style={{fontSize:18, textTransform:'uppercase', letterSpacing:1.5}}>On Time Delivery</Text>
                        </View>
                        <View style={{marginVertical:10, backgroundColor:color.pink, alignSelf:'center',padding:10,borderRadius:100, width:WIDTH*.9, alignItems:'center'}}>
                            <Text style={{fontSize:18, textTransform:'uppercase', letterSpacing:1.5}}>Quality Assurance</Text>
                        </View>
                        <View style={{marginVertical:10, backgroundColor:color.brightBlue, alignSelf:'center',padding:10,borderRadius:100, width:WIDTH*.9, alignItems:'center'}}>
                            <Text style={{fontSize:18, textTransform:'uppercase', letterSpacing:1.5}}>SECURE</Text>
                        </View>
                    </View>
                    <Text>{'\n'}</Text>
                    <View>
                        <Text style={[styles.text, {alignSelf:'center'}]}>Service Review & Rating Overview</Text>
                        <Text style={[styles.text, {alignSelf:'center'}]}><Text style={{fontSize:40, fontWeight:'700'}}>3</Text>/5</Text>

                        <FeedBackRating/>
                        <Text style={{color:color.Secondary, alignSelf:'center', marginTop:10}}>1500 Rating</Text>
                        <View>
                            <Rating width={75} Rate={5}/>
                            <Rating width={65} Rate={4}/>
                            <Rating width={85} Rate={3}/>
                            <Rating width={25} Rate={2}/>
                            <Rating width={5} Rate={1}/>
                        </View>
                        <Text>{'\n'}</Text>
                        <Text style={[styles.text,{alignSelf:'center'}]}>Customer Reviews</Text>
                        {
                            Data.map(()=>{
                                return <View key={Math.random().toString()} style={{backgroundColor:color.black, elevation:5, borderRadius:10, padding:10, marginVertical:10}}>
                                    <View style={[styles.row,{marginBottom:10}]}>
                                        <Image source={require('../../asset/styles/Images/me.jpg')} style={{width:IMAGE_SIZE, height:IMAGE_SIZE, borderRadius:IMAGE_SIZE, borderWidth:2, borderColor:color.lightBlue}}/>
                                        <View>
                                            <Text style={{color:color.white, marginBottom:5}}>{' '}Akhilesh Yadav</Text>
                                            <FeedBackRating SIZE={15} width={120}/>
                                        </View>
                                    </View>
                                    <Text style={{color:color.white, textAlign:'justify'}}>He Gives very good service. I am recommending you to take his service</Text>
                                </View>
                            })
                        }
                        <Text>{'\n'}</Text>
                        <View>
                            <Text style={[styles.text,{alignSelf:'center'}]}>Your Customers</Text>
                            <AccountListView navigate={navigate}/>
                            <AccountListView navigate={navigate}/>
                        </View>
                        <Text>{'\n'}</Text>
                    </View>
                </BottomSheetScrollView>
            </BottomSheet>
        </View>
    )
}

export default ServiceDescription

const styles = StyleSheet.create({
    contentContainer: {
        ...StyleSheet.absoluteFillObject,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: color.black,
  },
  text:{
      color:color.white, 
      fontSize:18,
      marginVertical:3,
      letterSpacing:1.5
  },
  row:{
    flexDirection:'row', 
    alignItems:'center'
  }
})
