import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './home';
import Page from './page';
// import Navigator from './routes/homeStack';

const Stack= createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'skyblue',
          },
          headerTintColor: '#fff',
        }}>
        <Stack.Screen name="Scratch" component={Page} />
        <Stack.Screen name="scratch" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}