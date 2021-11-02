import React from 'react';
import login from './screens/login';
import signup from './screens/signup'
import registerPatienht from './screens/register-patient'
import mainTab from './tabNavigation/mainTab';
import admin from './screens/admin';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
global.BaseUrl='http://192.168.2.123/SlowLearnerApi/api/SlowLearner/'
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={login} options={{headerShown:false}}/>
      <Stack.Screen name="Admin" component={admin} options={{headerShown:false}}/>
      <Stack.Screen name="SignUp" component={signup} options={{headerShown:false}}/>  
      <Stack.Screen name="MainTab" component={mainTab} options={{headerShown:false}}/>
      <Stack.Screen name="RegisterPatient" component={registerPatienht} options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;