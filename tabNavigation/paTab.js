import React from 'react';
import PaSetting from '../screens/pa_screens/pa_setting';
import patients from '../screens/pa_screens/pa_patients';
import appointments from '../screens/doctor_screens/appointments';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();
const paTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="PAPatients">
      <Tab.Screen
        name="PAPatients"
        component={patients}
        options={{
          headerShown: false,
          tabBarLabel: 'Patients',
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
      {/* <Tab.Screen
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
        }}/> */}
      <Tab.Screen
        name="PaSetting"
        component={PaSetting}
        options={{
          headerShown: false,
          tabBarLabel: 'Setting',
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


export default paTab;