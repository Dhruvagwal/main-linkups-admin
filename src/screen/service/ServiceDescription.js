import React from 'react'
import { View, Text } from 'react-native'


const ServiceDescription = ({route,navigation}) => {
    const { item } = route.params
    return (
        <View>
            <Text>{item.id}</Text>
            <Text>Description</Text>
        </View>
    )
}

export default ServiceDescription
