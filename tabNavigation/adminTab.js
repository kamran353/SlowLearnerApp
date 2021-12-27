import React from 'react';
import approved from '../screens/admin_screens/approved'
import pending from '../screens/admin_screens/pending'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();
const adminTab = () => {
  return (
  
    <Tab.Navigator
      initialRouteName="Approved">

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
          unmountOnBlur:true
        }}  
        />

       <Tab.Screen
        name="Pending"
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
          unmountOnBlur:true
        }}  />
    
    </Tab.Navigator>
 
  );
};


export default adminTab;