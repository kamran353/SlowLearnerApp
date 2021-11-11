import React from 'react';
import approved from '../screens/admin';
import pending from '../screens/pending'
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
        name="Approved"
        component={approved}
        options={{
            headerShown:false,
          tabBarLabel: 'Approved',
          tabBarIcon: ({ color, size,focused }) => (
            <MaterialCommunityIcons
              name="face-profile"
              color={focused?'blue':'#FFB133'}
              size={size}
            />
          ),
        }}  />
         <Tab.Screen
        name="Requested"
        component={pending}
        options={{
            headerShown:false,
          tabBarLabel: 'Pending',
          tabBarIcon: ({ color, size,focused }) => (
            <MaterialCommunityIcons
              name="lan-pending"
              color={focused?'blue':'#FFB133'}
              size={size}
            />
          ),
        }}  />
    
    </Tab.Navigator>
 
  );
};


export default adminTab;