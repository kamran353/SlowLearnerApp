import React from 'react';
import letters from '../screens/collection_Screens/letters'
import words from '../screens/collection_Screens/letters'
import sentences from '../screens/collection_Screens/letters'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const CollectionTab = () => {
  return (
  
    <Tab.Navigator
      initialRouteName="Home"
     >
      <Tab.Screen
        name="Letters"
        component={letters}
        options={{
            headerShown:false,
          tabBarLabel: 'Letters',
          tabBarIcon: ({ color, size,focused }) => (
            <MaterialCommunityIcons
              name="file-word"
              color={focused?'blue':'#FFB133'}
              size={size}
            />
          ),
        }}  />
         <Tab.Screen
        name="Words"
        component={words}
        options={{
            headerShown:false,
          tabBarLabel: 'Words',
          tabBarIcon: ({ color, size,focused }) => (
            <MaterialCommunityIcons
              name="file-word"
              color={focused?'blue':'#FFB133'}
              size={size}
            />
          ),
        }}  />

     <Tab.Screen
        name="Sentences"
        component={sentences}
        options={{
            headerShown:false,
          tabBarLabel: 'Sentences',
          tabBarIcon: ({ color, size,focused }) => (
            <MaterialCommunityIcons
              name="file-word"
              color={focused?'blue':'#FFB133'}
              size={size}
            />
          ),
        }}  />
    
    </Tab.Navigator>
 
  );
};


export default CollectionTab;