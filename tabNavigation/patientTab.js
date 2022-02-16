import React from 'react';
import testing from '../screens/patient_Screens/testing';
import training from '../screens/patient_Screens/training'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const adminTab = () => {
  return (

    <Tab.Navigator
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Training"
        component={training}
        options={{
          headerShown: false,
          tabBarLabel: 'Training',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="face-profile"
              color={focused ? 'blue' : '#FFB133'}
              size={size}
            />
          ),
          unmountOnBlur: true
        }}
      />
      <Tab.Screen
        name="Test"
        component={testing}
        options={{
          headerShown: false,
          tabBarLabel: 'Test',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="lan-pending"
              color={focused ? 'blue' : '#FFB133'}
              size={size}
            />
          ),
          unmountOnBlur: true
        }} />

    </Tab.Navigator>

  );
};


export default adminTab;