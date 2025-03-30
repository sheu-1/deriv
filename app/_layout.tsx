import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Transaction from './Transaction';
import Profile from './Profile';
import BuyScreen from './BuyScreen'; // Still accessible, but not in tabs

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Bottom Tab Navigator (Only Transaction & Profile)
const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Transaction" component={Transaction} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

// Stack Navigator (Includes BuyScreen but NOT in tabs)
export default function Layout() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen name="BuyScreen" component={BuyScreen} />
    </Stack.Navigator>
  );
}
