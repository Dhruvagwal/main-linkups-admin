import React, {useState} from 'react'
import { StyleSheet, View, Dimensions, FlatList, Image } from 'react-native'

import { MaterialIcons, AntDesign } from '@expo/vector-icons'; 

import {BottomSheetScrollView, BottomSheetFlatList, BottomSheetDraggableView } from '@gorhom/bottom-sheet'

import BottomSheet from 'components/BottomSheet'
import {ProductList} from 'components/product'

import {DataConsumer} from 'context/data'

import {Text, RowView} from 'styles'
import color from 'colors'

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width

const DATA = [  'https://i.pinimg.com/originals/3e/7b/72/3e7b729ae2443a8b77e0e6d651c8d62c.jpg',
                'https://i.pinimg.com/originals/ee/fd/38/eefd380a720d32ed8a53fa2d68516a28.jpg',
                'https://mfiles.alphacoders.com/778/778914.jpg',
                'https://mfiles.alphacoders.com/717/717350.jpg',
                'https://1.bp.blogspot.com/-VOu5QNaET_I/XvdJZ8e1aBI/AAAAAAAALrY/YeLOiyMSrLAS810JqH8NHzH611JAB230ACK4BGAsYHg/s3840/SuperCars_5743.jpeg'
              ]
const IMAGE_HEIGHT = HEIGHT*.75
const IMAGE_PAGINATION_HEIGHT = 50

const Point = ({children})=>{
    return <RowView style={{marginLeft:20}}>
        <View style={{padding:5, backgroundColor:color.active, borderRadius:3.5}}/>
        <Text size={17}> {children}</Text>
    </RowView>
}

const Review = ()=>{
    const IMAGE_SIZE = 50
    const uri = 'https://i.insider.com/5cb8b133b8342c1b45130629?width=700'
    return <View style={{backgroundColor:color.dark, opacity: 0.7, width:'100%', alignSelf:'center', marginTop:10, height:150, padding:20, borderRadius:20, justifyContent:'center'}}>
        <RowView>
            <Image source={{uri}} style={{height:IMAGE_SIZE, width:IMAGE_SIZE, borderRadius:IMAGE_SIZE}}/>
            <View style={{marginLeft:10}}>
                <Text regular>Ananya Pandey</Text>
                <RowView>
                    <AntDesign name="star" size={24} color={color.active} />
                    <Text regular> 4.5</Text>
                </RowView>
            </View>
        </RowView>
        <Text size={12} style={{marginTop:5}}>
            Awesome Service with great Quality. Recomending You To...
        </Text>
    </View>
}
const ServiceDescription = ({navigation:{navigate}, route:{params:{id}}}) => {
    const {state:{profile}} = DataConsumer()
    const {Providers:{services}} = profile
    const data = services.filter(item=>item.id===id)[0]
    return (
        <View style={{flex:1, backgroundColor:color.dark}}>
            <View style={{height:IMAGE_HEIGHT}}>
                <FlatList
                    data={data.imageLink}
                    snapToInterval={IMAGE_HEIGHT}
                    decelerationRate='fast'
                    keyExtractor={(item)=>item.Id}
                    renderItem={({item})=>{
                        return <Image source={{uri:item.uri}} style={{width:WIDTH, height:IMAGE_HEIGHT}}/>
                    }}
                />
            </View>
            <View style={{position:'absolute', right:10, top:IMAGE_HEIGHT/6.5}}>
                <FlatList
                    data={data.imageLink}
                    snapToInterval={IMAGE_PAGINATION_HEIGHT}
                    decelerationRate='fast'
                    keyExtractor={(item)=>item.Id}
                    renderItem={({item})=>{
                        return <View style={{marginVertical:10, borderWidth:2, borderColor:color.white, borderRadius:10,overflow:'hidden'}}>
                            <Image source={{uri:item.uri}} style={{width:IMAGE_PAGINATION_HEIGHT, height:IMAGE_PAGINATION_HEIGHT}}/>
                        </View>
                    }}
                />
            </View>
            <BottomSheet snapPoints={[HEIGHT*.25,HEIGHT*.85]}>
                <BottomSheetScrollView>
                    <View style={{padding:20, paddingTop:0}}>
                        <RowView style={{width:'80%', alignItems:'flex-start', overflow:'visible', justifyContent:'space-between'}}>
                            <Text size={25} bold style={{width:WIDTH*.7}}>{data.name}</Text>
                            <Text size={20}>
                                <AntDesign name="star" size={24} color={color.active} />
                                {' '}4.5
                            </Text>
                        </RowView>
                        <Text regular style={{color:color.inActive}}>{profile.name}</Text>

                        <RowView style={{alignItems:'flex-end', marginVertical:20}}>
                            <View>
                                <Text size={12}>Price</Text>
                                <Text size={30} style={{color:color.active, marginRight:5}} regular>₹ {data.price}</Text>
                            </View>
                            <View>
                                <Text size={15} style={{color:color.inActive, textDecorationLine:'line-through'}} regular>₹ 675</Text>
                                <Text style={{color:color.inActive}} regular>Save ₹ 175</Text>
                            </View>
                        </RowView>
                        
                        <Text style={{textAlign:'justify', marginTop:20}}>This Service provides the leading capacity to enhance your stamina in a very fruit full way.</Text>
                        <Text>{'\n'}</Text>
                        {/* Service Provider Detail */}
                        <View>
                            <RowView style={{justifyContent:'space-between'}}>
                                <Text regular>About Service Provider</Text>
                                <RowView>
                                    <Text size={12}>See More</Text>
                                    <MaterialIcons name="keyboard-arrow-right" size={24} color={color.white} />
                                </RowView>
                            </RowView>
                            <View style={{marginTop:5}}>
                                <Point>Long Experience</Point>
                                <Point>Reliable</Point>
                                <Point>Price Effective</Point>
                                <Point>Quality Assurance</Point>
                            </View>
                            <Text>{'\n'}</Text>
                            <View style={{marginTop:20}}>
                                    <Text regular>Users Review</Text>
                                <RowView style={{justifyContent: 'space-between', marginTop:10}}>
                                    <Text size={12} style={{color:color.inActive, alignSelf:'flex-end'}}>5 out of 150 reviews</Text>
                                    <RowView>
                                        <Text size={12}>See More</Text>
                                        <MaterialIcons name="keyboard-arrow-right" size={24} color={color.white} />
                                    </RowView>
                                </RowView>
                                {[1,2,3,4].map(()=>{
                                    return <Review key={Math.random().toString()}/>
                                })}
                            </View>
                        </View>
                    </View>
                </BottomSheetScrollView>
            </BottomSheet>
        </View>
    )
}
export {Review}
export default ServiceDescription

const styles = StyleSheet.create({
    style:{
        textDecorationLine:'line-through'
    }
})
