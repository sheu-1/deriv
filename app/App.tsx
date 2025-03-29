import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Transaction from './tabs/Transaction';
import Profile from './tabs/Profile';
import BuyScreen from './tabs/BuyScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Transaction" component={Transaction} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Main" 
          component={TabNavigator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="BuyScreen" 
          component={BuyScreen} 
          options={{
            headerShown: true,
            title: 'Buy', // Customize header title if needed
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
