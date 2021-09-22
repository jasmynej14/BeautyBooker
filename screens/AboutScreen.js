import React, {useState,useEffect} from 'react';
import {Text, View} from 'react-native';
import mainStyles from '../styles/MainStyles';
export default function AboutScreen(){
    return(
        <View style={mainStyles.container}>
            <Text style={mainStyles.title}>About</Text>
        </View>
    )
}