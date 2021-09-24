import { StyleSheet } from "react-native";

const servicesStyles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1
    },
    servicesNav:{
        flex:2,
        flexDirection:"row",
        justifyContent:"space-around",
        
    },
    businessChoice:{
        backgroundColor:"#F6C396",
        width:"25%",
        height:"50%",
        alignSelf:"center",
        borderRadius:20,
        borderWidth:5,
        borderColor:"#F7831D",
        justifyContent:"center"
    },
    selectedChoice:{
        backgroundColor:"#F7831D",
        borderColor:"#F6C396"
    },
    choiceText:{
        textAlign:"center",
        alignSelf:"center",
        fontSize:20
    },
    services:{
        flex:10,
       
    }
})

export default servicesStyles;