import React,{useState, useEffect} from 'react'
import { StyleSheet, View, Dimensions, TextInput, Pressable, ActivityIndicator } from 'react-native'

import SelectPicker from 'react-native-form-select-picker'; 

import upload, {getLink, getLocalPath} from 'hooks/upload'
import {saveData, getProviderCategoryList, getCategory} from '../../hooks/Data'

import {Text} from 'styles'
import color from 'colors'

import {DataConsumer} from 'context/data'

import ImageSelector from 'components/imagePicker'

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width
const edit = () => {
    const {state:{profile}, Update} = DataConsumer()

    const [image, setImage ] = useState(profile.imageUri)

    const [selectedCategory, setCategory] = useState();
    const [category, setCategoryList] = useState(null)

    const [name, setName] = useState(profile.name) 
    const [location, setLocation] = useState(profile.Location.lat.toString()) 
    const [price, setPrice] = useState('₹ '+profile.info.price) 

    const [loading, setLoading] = useState(false)
    const [count, setCount] = useState(0)

    !price && setPrice('₹ ')
    const getList = async ()=>{
        const {data} = await getProviderCategoryList()
        setCategoryList(data)
        setCount(1)
    }
    count === 0 && getList()    
    const Save = async ()=>{
        setLoading(true)

        const blob = await getLocalPath(image)
        const uploadTask = upload(blob, `serviceImages/${id}`, `${profile.id}`);
        await uploadTask;
        const uri = await getLink(uploadTask, `profileImage`, `${profile.id}`)

        await saveData(name, location, price,uri, selectedCategory, profile)
        await Update()
        setLoading(false)
    }
    return (
        <View style={{backgroundColor:color.dark, flex:1}}>
            <Text size={25} style={{padding:20, alignSelf:'center', marginTop:50}} bold>Edit Details</Text>
            <View style={{flex:1, justifyContent:'center', marginTop:-100}}>
                <ImageSelector style={{overflow:'hidden', borderRadius:100, alignSelf:'center', justifContent:'center'}} setImage = {setImage} image={image}/>
                <Text style={{alignSelf:'center', marginTop:20}} size={20}>+91 8595771213</Text>
                <View style={{padding:20}}>
                    <TextInput onChangeText={setName} value={name} placeholder="Name" placeholderTextColor={color.inActive} style={styles.TextInput}/>
                    <TextInput onChangeText={setLocation} value={location}  placeholder="Location" placeholderTextColor={color.inActive} style={styles.TextInput}/>
                    {category !==null && <SelectPicker
                            onValueChange={(value) => {
                                setCategory(value);
                            }}
                            placeholder="--Select Category--"
                            style={styles.TextInput}
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
                        </SelectPicker>}
                    <TextInput onChangeText={setPrice} keyboardType="number-pad" placeholder="Price" value={price} placeholderTextColor={color.inActive} style={styles.TextInput}/>
                </View>
                <Pressable onPress={Save} style={{backgroundColor:color.active, alignSelf:'center',padding:10, paddingHorizontal:30, borderRadius:20}}>
                    {!loading?<Text regular>Save</Text>
                    :<ActivityIndicator color={color.white}/>}
                </Pressable>
            </View>
        </View>
    )
}

export default edit

const styles = StyleSheet.create({
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
