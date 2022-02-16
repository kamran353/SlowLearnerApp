import React from 'react';
import levelone from '../screens/practices_screens/level_one';
import leveltwo from '../screens/practices_screens/level_two';
import levelthree from '../screens/practices_screens/level_three';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const LevelTab = () => {
  return (

    <Tab.Navigator
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Lone"
        component={levelone}
        options={{
          headerShown: false,
          tabBarLabel: 'Level 1',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="file-word"
              color={focused ? 'blue' : '#FFB133'}
              size={size}
            />
          ),
          unmountOnBlur: true
        }} />
      <Tab.Screen
        name="Ltwo"
        component={leveltwo}
        options={{
          headerShown: false,
          tabBarLabel: 'Level 2',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="file-word"
              color={focused ? 'blue' : '#FFB133'}
              size={size}
            />
          ),
          unmountOnBlur: true
        }} />

      <Tab.Screen
        name="Lthree"
        component={levelthree}
        options={{
          headerShown: false,
          tabBarLabel: 'Level 3',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="file-word"
              color={focused ? 'blue' : '#FFB133'}
              size={size}
            />
          ),
          unmountOnBlur: true
        }} />

    </Tab.Navigator>

  );
};


export default LevelTab;