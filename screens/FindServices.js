import React, {useState,useEffect} from 'react';
import {Text, View,TouchableOpacity } from 'react-native';
import servicesStyles from '../styles/ServicesStyles';
import BusinessList from '../components/BusinessList';
export default function FindServices({navigation}){
    const [option,setOption] = useState("hair")
    return(
        <View style={servicesStyles.container}>
            <View style={servicesStyles.servicesNav}>
                <TouchableOpacity style={[servicesStyles.businessChoice,option === "hair" && servicesStyles.selectedChoice]} onPress={() => setOption("hair")}>
                    <Text style={[servicesStyles.choiceText]}>Hair</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[servicesStyles.businessChoice,option === "nails" && servicesStyles.selectedChoice]} onPress={() => setOption("nails")}>
                    <Text style={[servicesStyles.choiceText]}>Nails</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[servicesStyles.businessChoice,option === "spa" && servicesStyles.selectedChoice]} onPress={() => setOption("spa")}>
                    <Text style={[servicesStyles.choiceText]}>Spa</Text>
                </TouchableOpacity>
            </View>
            <View style={servicesStyles.services}>

                <BusinessList type={option}/>

            </View>
        </View>
    )
}