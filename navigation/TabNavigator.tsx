import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import Profile from '../app/tabs/Profile';
import Transaction from '../app/tabs/Transaction';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: 'person' | 'card' | undefined;

            if (route.name === 'Profile') {
              iconName = 'person';
            } else if (route.name === 'Transaction') {
              iconName = 'card';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#6200ee',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Transaction" component={Transaction} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
