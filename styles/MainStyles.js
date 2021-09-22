import { StyleSheet } from "react-native";
import { useFonts } from 'expo-font';


const mainStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        justifyContent:"center"
    },
    title:{
        fontSize:25,
        fontWeight:"bold",
        textAlign:"center",
        padding:10
    },
    homeBox:{
        width:"75%",
        backgroundColor:"#F7F0B3",
        flex:0.5,
        alignSelf:"center",
        justifyContent:"center",
        borderRadius:15,
    },
    button:{
        backgroundColor:"#F08820",
        width:"40%",
        alignSelf:"center",
        margin:10,
        padding:5,
        borderRadius:10
    },
    buttonText:{
        fontSize:20,
        textAlign:"center"
    }
})

export default mainStyles;