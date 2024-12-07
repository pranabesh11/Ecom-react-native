/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Text,
} from 'react-native';

import ProductList from './components/ProductList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from './components/ProductDetails';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ProductList} options={{headerShown:false}}/>
        <Stack.Screen name='details' component={ProductDetails} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}



export default App;
