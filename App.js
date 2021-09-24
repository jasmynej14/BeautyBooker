import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import FindServices from './screens/FindServices';
const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" 
          component={HomeScreen}
          options={{
            title: "Beauty Booker Home 💁🏽‍♀️",
            headerStyle:{
              backgroundColor:'#FAE374',
            }
          }}
        />
        <Stack.Screen name="About" component={AboutScreen}/>
        <Stack.Screen name="Find" component={FindServices}
          options={{
              title:"Find Services 🔎",
              headerStyle:{
                backgroundColor:'#FAE374'
              }
            }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
