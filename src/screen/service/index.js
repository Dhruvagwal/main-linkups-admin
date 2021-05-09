import React, {useState} from 'react'
import { StyleSheet, View, Dimensions, Image, ScrollView, TextInput, FlatList, Pressable } from 'react-native'

import CONSTANT from '../../navigation/navigationConstant.json'
import {Text, RowView} from 'styles'
import  color from 'colors'

import {DataConsumer} from 'context/data'
import {useKeyboardStatus} from 'hooks/useKeyboard'

import { FontAwesome, AntDesign } from '@expo/vector-icons'; 

// import color from '../../asset/styles/color'

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width

const IMAGE_SIZE = 200
const ServiceListView = ({navigation, data})=>{
    const {state:{category}} = DataConsumer()
    const categoryName = category.find(item=>item.id === data.CatSID).name
    return <Pressable onPress={()=>navigation.navigate(CONSTANT.ServiceDescription,{id:data.id})} style={{flexDirection:'row', height:180,opacity:.95, backgroundColor:color.elevatedDark, borderRadius:10, alignItems:'center', marginVertical:20}}>
        <Image source={{uri:data.imageLink[0].uri}} style={{width:IMAGE_SIZE, height:IMAGE_SIZE, borderRadius:10}}/>
        <View style={{margin:10, alignSelf:'flex-start',width:160}}>
            <Text bold>{data.name}</Text>
            <Text>{categoryName}</Text>
            <Text style={{fontSize:25, marginTop:10}}>₹ {data.price}</Text>
            <RowView>
                <AntDesign key={Math.random()} name="star" size={20} color={color.active} />
                <Text>4.5</Text>
            </RowView>
        </View>
    </Pressable>
}

const Index = ({navigation}) => {
    const {state:{profile:{Providers:{services}}}} = DataConsumer()
    const [search, setSearch] = useState('')
    const isOpen = useKeyboardStatus()
    return (
        <View style={{flex:1}}>
            <View style={{height:HEIGHT*.07}}/>
            <View style={{backgroundColor:color.lightDark,width:WIDTH*0.95, alignSelf:'center', opacity:.95, borderRadius:5, flexDirection:'row', alignItems:'center'}}>
                    <FontAwesome name="search" size={20} color={color.white} style={{marginHorizontal:10}}/>
                    <TextInput placeholder='Search Your Service' value={search} onChangeText={setSearch} placeholderTextColor={color.white} style={{color:color.white, padding:10,fontSize:18, width:WIDTH*0.8}}/>
            </View>  
            {!isOpen && <View style={{height:HEIGHT*.2, padding:10, paddingRight:0, paddingTop:20}}>
                <Text>Notifications</Text>
                <FlatList
                    data={['car','bike','cycle','plane']}
                    keyExtractor={item=>item}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={WIDTH*0.92}
                    decelerationRate={0.8}
                    renderItem={()=>{
                        return <View style={{width:WIDTH*0.9,backgroundColor:color.lightDark, margin:5, opacity:0.95, borderRadius:10, padding:10}}>
                            <Text adjustsFontSizeToFit numberOfLines={1} style={{fontSize:20, letterSpacing:1.5, color:color.white, marginBottom:10}} regular>Rahul is Your Customer Now!</Text>
                            <Text>Say Hy to Rahul</Text>
                            <Text style={{position:'absolute', bottom:10, right:10, color:color.active}}>Click to know more</Text>
                        </View>
                    }}
                />
            </View>}
            <ScrollView>
                <View style={{width:WIDTH*.95,flex:1, alignSelf:'center', marginTop:10}}>
                        {
                            services.map(item=>{
                                const show = item.name.toUpperCase().includes(search.toUpperCase())
                                return <View key={item.id}>
                                    {show && <ServiceListView data={item} navigation={navigation}/>}
                                </View>
                            })
                        }
                        {!isOpen && <Text>{'\n\n'}</Text>}
                </View>
            </ScrollView>
            {!isOpen && <Pressable onPress={()=>navigation.navigate(CONSTANT.AddService)} style={{position:'absolute', bottom:20, borderWidth:0,backgroundColor:color.active, elevation:5, zIndex:100, padding:10, alignSelf:'center', width:WIDTH*0.75, alignItems:'center', borderRadius:50}}>
                <Text size={18} regular style={{textTransform:'uppercase', color:color.white, letterSpacing:1.5}}>Add New Service</Text>
            </Pressable>}
        </View>
    )
}

export default Index

const styles = StyleSheet.create({})
