import React from 'react';
import login from './screens/login';
import signup from './screens/signup'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={login} options={{headerShown:false}}/>
      <Stack.Screen name="SignUp" component={signup} options={{headerShown:false}}/>  
    </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;