import React from 'react';
import assistent from '../screens/doctor_screens/assistents';
import profile from '../screens/doctor_screens/profile'
import appointments from '../screens/doctor_screens/appointments';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const mainTab = () => {
  return (
  
    <Tab.Navigator
      initialRouteName="Home"
     >
     
         <Tab.Screen
        name="appointments"
        component={appointments}
        options={{
            headerShown:false,
          tabBarLabel: 'Appointments',
          tabBarIcon: ({ color, size,focused }) => (
            <MaterialCommunityIcons
              name="face-agent"
              color={focused?'blue':'#FFB133'}
              size={size}
            />
          ),
          unmountOnBlur:true
        }}  />

         <Tab.Screen
        name="Assistents"
        component={assistent}
        options={{
            headerShown:false,
          tabBarLabel: 'Assistents',
          tabBarIcon: ({ color, size ,focused}) => (
            <MaterialCommunityIcons
              name="face"
              color={focused?'blue':'#FFB133'}
              size={size}
            />
          ),
          unmountOnBlur:true
        }}  />
        
      <Tab.Screen
        name="Profile"
        component={profile}
        options={{
            headerShown:false,
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color, size,focused }) => (
            <MaterialCommunityIcons
              name="account-settings"
              color={focused?'blue':'#FFB133'}
              size={size}
            />
          ),
          unmountOnBlur:true
        }} />
    </Tab.Navigator>
 
  );
};


export default mainTab;