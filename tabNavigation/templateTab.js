import React from 'react';
import oneBlank from '../screens/template_screens/one_blank_template';
import twoBlank from '../screens/template_screens/two_blank_template';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();
const templateTab = () => {
  return (

    <Tab.Navigator
      initialRouteName="Approved">

      <Tab.Screen
        name="OneBlank"
        component={oneBlank}
        options={{
          headerShown: false,
          tabBarLabel: 'One Blank',
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
        name="TwoBlank"
        component={twoBlank}
        options={{
          headerShown: false,
          tabBarLabel: 'Two Blank',
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


export default templateTab;