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
              name="face"
              color={'#FFB133'}
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
              name="face-agent"
              color={'#FFB133'}
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
              name="account-settings"
              color={"#FFB133"}
              size={size}
            />
          ),
        }} />
    </Tab.Navigator>
 
  );
};


export default mainTab;