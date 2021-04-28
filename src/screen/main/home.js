import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

const HEIGHT = Dimensions.get('screen').height

const Index = () => {
    return (
        <View style={styles.container}>
            <Text>Home List</Text>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('screen').width
    }
})
