import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

import BottomSheet,{BottomSheetScrollView} from '@gorhom/bottom-sheet'

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