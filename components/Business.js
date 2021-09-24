import React from 'react'
import {Text, View,TouchableOpacity,StyleSheet } from 'react-native';

export default function Business({ business,navigation }){

    return(
        <View style={styles.container}>
            <Text>{business.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#93DFEE"
    }
})