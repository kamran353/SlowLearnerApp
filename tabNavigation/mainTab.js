import React from 'react';
import home from '../screens/home';
import profile from '../screens/profile'
import myPa from '../screens/myPa';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const mainTab = () => {
  return (
  
    <Tab.Navigator
      initialRouteName="Home"
     >
      <Tab.Screen
        name="Home"
        component={home}
        options={{
            headerShown:false,
          tabBarLabel: 'Patients',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={'red'}
              size={size}
            />
          ),
        }}  />
         <Tab.Screen
        name="PA"
        component={myPa}
        options={{
            headerShown:false,
          tabBarLabel: 'All PA',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={'red'}
              size={size}
            />
          ),
        }}  />
      <Tab.Screen
        name="Profile"
        component={profile}
        options={{
            headerShown:false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={size}
            />
          ),
        }} />
    </Tab.Navigator>
 
  );
};


export default mainTab;