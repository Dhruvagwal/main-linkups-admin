import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

const Index = () => {
    return (
        <View style={styles.container}>
            <Text>Order List</Text>
            <Text>Order List</Text>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('screen').width
    }
})
