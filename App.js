import React from 'react';
import login from './screens/loginSignUp_screens/login';
import signup from './screens/loginSignUp_screens/signup'
import Splash from './screens/loginSignUp_screens/splash';
import registerPatienht from './screens/doctor_screens/register-patient'
import appointment_details from './screens/doctor_screens/appointment_details';
import mainTab from './tabNavigation/mainTab';
import admin from './tabNavigation/adminTab';
import LevelTab from './tabNavigation/level_tab';
import CollectionTab from './tabNavigation/collectionTab';
import patient_words from './screens/patient_Screens/patient_words';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
global.BaseUrl='http://192.168.100.37/SlowLearnerApi/api/SlowLearner/'
global.BaseUrlForImages='http://192.168.100.37/SlowLearnerApi/'
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
      <Stack.Screen name="Collections" component={CollectionTab} options={{headerShown:false}}/>
      <Stack.Screen name="PatientWords" component={patient_words} options={{headerShown:false}}/>
      <Stack.Screen name="AppointmentDetails" component={appointment_details} options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;