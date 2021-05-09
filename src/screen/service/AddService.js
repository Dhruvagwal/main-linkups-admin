import React, {useEffect, useState, useCallback} from 'react'
import moment from 'moment'
import { StyleSheet, View, TextInput as RTextInput, Dimensions, Pressable, ScrollView, Image, ActivityIndicator } from 'react-native'

import SelectPicker from 'react-native-form-select-picker'; 
import ImageSelector from 'components/serviceImagePicker'

import { MaterialIcons, Entypo } from '@expo/vector-icons'; 

import {useService} from 'hooks/Data'
import upload, {getLink, getLocalPath} from 'hooks/upload'

import {DataConsumer} from 'context/data'

import {Text, RowView} from 'styles'
import color from 'colors'

const TextInput = ({placeholder, value, onChangeText, style, keyboardType})=>{
    return <>
            <RTextInput label='headline' style={[styles.TextInput,style]} keyboardType={keyboardType} placeholder={placeholder} value={value} onChangeText={onChangeText} placeholderTextColor={color.inActive}/>
        </>
        
}

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width
const options=['Warranty', 'Garranty', 'None']
const id = 'SER-'+Math.floor(Math.random()*1000000)


const AddService = ({navigation}) => {
    const {state, Update} = DataConsumer()
    const {profile, category} = state
    console.log(category)
    const [name, setName] = useState()
    const [mrp, setMrp] = useState()
    const [discount, setDiscount] = useState('0')
    const [assurance, setAssurance] = useState(options[0])
    const [duration, setDuration] = useState()
    const [loading, setLoading] = useState(false)
    const [selectedCategory, setCategory] = useState();
    const [images, setImage] = useState([])


    const price = parseInt(mrp)*(1-parseInt(discount)/100)
    
    const Publish= async ()=>{
        var imageLink = []
        var count = 1
        setLoading(true)
        await new Promise((resolve, reject)=>images.map(async image=>{
            const Id = Math.floor((Math.random()*1000000)).toString()
            const blob = await getLocalPath(image)
            const uploadTask = upload(blob, `serviceImages/${id}`, `${Id}`);
            await uploadTask;
            const uri = await getLink(uploadTask, `serviceImages/${id}`, `${Id}`)
            imageLink.push({uri, Id})
            count===images.length && resolve(true) 
            count ++ 
        }))
        const data = {
            name,
            id,
            CatSID:selectedCategory,
            isActive:true,
            mrp,
            discount,
            price,
            assurance,
            duration,
            imageLink,
            since:moment(new Date()).format('lll')
        }
        await useService(state, data)
        await Update()
        setLoading(false)
    }
    return (
        <View style={{flex:1}}>
            <View style={{height:HEIGHT*.05}}/>
            <RowView>
                <Pressable onPress={()=>navigation.goBack()}>
                    <MaterialIcons name="keyboard-arrow-left" size={50} color={color.white} />
                </Pressable>
                <View style={{alignItems:'center', width:'75%'}}>
                    <Text size={20} regular>{profile.name}</Text>
                    <Text>Add Service</Text>
                </View>
            </RowView>
            <ScrollView>
                <View style={{backgroundColor:color.elevatedDark, flex:1, margin:10, padding:10, borderRadius:20}}>
                    <Text style={{marginVertical:20, alignSelf:'center'}}>Service Details</Text>
                    <TextInput label='headline' placeholder="Headline" value={name} onChangeText={setName}/>
                        <SelectPicker
                            onValueChange={(value) => {
                                setCategory(value);
                            }}
                            placeholder="--Select Category--"
                            style={{...styles.TextInput}}
                            onSelectedStyle={{color:color.white, fontFamily:'Montserrat'}}
                            containerStyle={{
                                backgroundColor:color.lightDark,
                                color:color.white
                            }}
                            doneButtonTextStyle	={{color:color.white, fontFamily:'Montserrat'}}
                            >
                            {category.filter(item=>item.isActive===true).map((item) => (
                                <SelectPicker.Item label={item.name} value={item.id} key={Math.random().toString()} />
                            ))}
                        </SelectPicker>
                        <RowView style={{justifyContent:'space-between'}}>
                            <TextInput style={{width:'48%'}} keyboardType='number-pad' placeholder="MRP" value={mrp} onChangeText={setMrp}/>
                            <TextInput style={{width:'48%'}} keyboardType='number-pad' placeholder="Discount" value={discount} onChangeText={setDiscount}/>
                        </RowView>
                        <RowView style={{justifyContent:'space-between'}}>
                            <SelectPicker
                                onValueChange={(value) => {
                                    setAssurance(value);
                                }}
                                placeholder='--Type--'
                                style={{...styles.TextInput, width:'48%'}}
                                onSelectedStyle={{color:color.white, fontFamily:'Montserrat'}}
                                containerStyle={{
                                    backgroundColor:color.lightDark,
                                    color:color.white
                                }}
                                doneButtonTextStyle	={{color:color.white, fontFamily:'Montserrat'}}
                                >
                                {options.map((item) => (
                                    <SelectPicker.Item label={item} value={item} key={Math.random().toString()} />
                                ))}
                            </SelectPicker>
                            {assurance!==options[2] && <TextInput style={{width:'48%'}} keyboardType='number-pad' placeholder="Days" value={duration} onChangeText={setDuration}/>}
                        </RowView>
                        {
                            images.length<4 && <ImageSelector  image={images} setImage={setImage} style={[styles.TextInput,{alignItems:'center', justifyContent:'center', height: 200}]}>
                            <Entypo name="upload-to-cloud" size={100} color={color.active} />
                            <Text>Upload Image or Video</Text>
                        </ImageSelector>
                        }
                        {images.length>0 && <Text style={{alignSelf:'flex-end'}} size={12}>{`${images.length} out of 4`}</Text>}
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {
                                images.map(image=><View key={Math.random().toString()}>
                                        <Image source={{uri:image}} style={{width:85, height:85, borderRadius:20, marginRight:10}}/>
                                        <Pressable onPress={()=>setImage(images.filter(item=>item!==image))} style={{position:'absolute', top:5, right: 15,}}>
                                            <Entypo name="cross" size={24} color={color.active} />
                                        </Pressable>
                                    </View>)
                            }
                        </ScrollView>
                        
                </View>
            </ScrollView>
            <View style={{backgroundColor:color.lightDark, height:150, borderTopLeftRadius:20, borderTopRightRadius:20, padding:10}}>
                    <Text size={20} style={{color:color.active, width:'60%'}} bold>{name}</Text>
                    <View style={{alignItems:'center', position:'absolute', top:10, right:10}}>
                        <Text regular>After Discount</Text>
                        <Text>₹ <Text size={30}>{price}</Text></Text>
                    </View>
                <Pressable onPress={Publish} style={{backgroundColor:color.active, alignSelf:'flex-start',position:'absolute', bottom:10,left:10, padding:10, borderRadius:100}}>
                    {!loading ? <Text regular>Publish</Text>:<ActivityIndicator color={color.white}/>}
                </Pressable>
            </View>
        </View>
    )
}

export default AddService

const styles = StyleSheet.create({
    style:{
        borderTopRightRadius:20
    },
    TextInput:{
        fontFamily:'Montserrat',
        fontSize:16,
        marginVertical:10,
        padding:10,
        borderColor:color.inActive,
        borderRadius:20,
        borderWidth:1,
        color:color.white,
        paddingHorizontal:20
    },
})
