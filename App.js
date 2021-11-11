import React from 'react';
import login from './screens/login';
import signup from './screens/signup'
import Splash from './screens/splash';
import registerPatienht from './screens/register-patient'
import mainTab from './tabNavigation/mainTab';
import admin from './tabNavigation/adminTab';
import LevelTab from './screens/practices_screens/level_tab';
import patient_words from './screens/patient_Screens/patient_words';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
global.BaseUrl='http://192.168.2.96/SlowLearnerApi/api/SlowLearner/'
global.BaseUrlForImages='http://192.168.2.96/SlowLearnerApi/'
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={login} options={{headerShown:false}}/>
      <Stack.Screen name="Admin" component={admin} options={{headerShown:false}}/>
      <Stack.Screen name="SignUp" component={signup} options={{headerShown:false}}/>  
      <Stack.Screen name="MainTab" component={mainTab} options={{headerShown:false}}/>
      <Stack.Screen name="RegisterPatient" component={registerPatienht} options={{headerShown:false}}/>
      <Stack.Screen name="Levels" component={LevelTab} options={{headerShown:false}}/>
      <Stack.Screen name="PatientWords" component={patient_words} options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;