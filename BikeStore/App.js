import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Screen1 from './scr/screens/Screen1';
import Screen2 from './scr/screens/Screen2';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Screen1' component={Screen1}/>
      <Stack.Screen name='Screen2' component={Screen2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

