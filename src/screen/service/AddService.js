import React, {useEffect, useState, useCallback} from 'react'
import { StyleSheet, View, TextInput, Dimensions, Pressable, ScrollView } from 'react-native'
import SelectPicker from 'react-native-form-select-picker'; 
import ImageSelector from 'components/serviceImagePicker'

import { MaterialIcons, Entypo } from '@expo/vector-icons'; 

import {getCategory} from 'hooks/Data'

import {DataConsumer} from 'context/data'

import {Text, RowView} from 'styles'
import color from 'colors'

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width

const option = ["Apple", "Banana", "Orange"];

const AddService = ({navigation}) => {
    const {state:{profile, category}} = DataConsumer()
    const [name, setName] = useState()
    const [selectedCategory, setCategory] = useState();
    const [image, setImage] = useState()
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
                    <TextInput style={styles.TextInput} placeholder="Headline" value={name} onChangeText={setName} placeholderTextColor={color.inActive}/>
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
                            <TextInput style={{...styles.TextInput, width:'48%'}} placeholder="MRP" value={name} onChangeText={setName} placeholderTextColor={color.inActive}/>
                            <TextInput style={{...styles.TextInput, width:'48%'}} placeholder="Discount" value={name} onChangeText={setName} placeholderTextColor={color.inActive}/>
                        </RowView>
                        <RowView style={{justifyContent:'space-between'}}>
                            <TextInput style={{...styles.TextInput, width:'48%'}} placeholder="--Select--" value={name} onChangeText={setName} placeholderTextColor={color.inActive}/>
                            <TextInput style={{...styles.TextInput, width:'48%'}} placeholder="Days" value={name} onChangeText={setName} placeholderTextColor={color.inActive}/>
                        </RowView>
                        <ImageSelector style={[styles.TextInput,{alignItems:'center', justifyContent:'center', height: 200}]}>
                            <Entypo name="upload-to-cloud" size={100} color={color.active} />
                            <Text>Upload Image or Video</Text>
                        </ImageSelector>
                </View>
            </ScrollView>
            <View style={{backgroundColor:color.lightDark, height:150, borderTopLeftRadius:20, borderTopRightRadius:20, padding:10}}>
                <Text size={25} style={{color:color.active}} bold>{name}</Text>
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
    }
})
