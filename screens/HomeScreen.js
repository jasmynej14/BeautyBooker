import React, {useState,useEffect} from 'react';
import {Text, View,TouchableOpacity } from 'react-native';
import mainStyles from '../styles/MainStyles';

export default function HomeScreen({ navigation }){
        
        return(
            <View style={mainStyles.container}>
                <View style={mainStyles.homeBox}>
                    <Text style={mainStyles.title}>Beauty Booker 💁🏽‍♀️ </Text>
                    <TouchableOpacity style={mainStyles.button}>
                        <Text style={mainStyles.buttonText}>🔎 Find Services</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={mainStyles.button}>
                        <Text style={mainStyles.buttonText}>👤 Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={mainStyles.button} onPress={()=> navigation.navigate('About')}>
                        <Text style={mainStyles.buttonText}>❔ About</Text>
                    </TouchableOpacity>
                  
                </View>
                
            </View>
        )
    
    
}