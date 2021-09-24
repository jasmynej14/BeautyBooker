import { setStatusBarHidden } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import {Text, View,TouchableOpacity,StyleSheet } from 'react-native';
import Business from './Business';
export default function BusinessList({ type }){
    const [allPlaces,setPlaces] = useState({name:"debug"})
    const place ={name:"sarah salon"}
    
    const getPlaces = () =>{
       if(type==="hair"){
           setPlaces({name:"sarah salon"})
       }
       else if(type === "nails"){
           setPlaces({name:"nice nails"})
       }
       else{
           setPlaces({name:"spicy spa"})
       }
    }

    
    return(
        <View style={styles.container}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    }
})