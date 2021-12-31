import React from 'react';
import login from './screens/loginSignUp_screens/login';
import signup from './screens/loginSignUp_screens/signup'
import Splash from './screens/loginSignUp_screens/splash';

import registerPa from './screens/doctor_screens/register-pa'
import doctor_patients from './screens/doctor_screens/doctor_patients'
import appointment_details from './screens/doctor_screens/appointment_details';

import mainTab from './tabNavigation/mainTab';
import adminTab from './tabNavigation/adminTab';
import LevelTab from './tabNavigation/level_tab';
import CollectionTab from './tabNavigation/collectionTab';
import patientTab from './tabNavigation/patientTab'

import newPractice from './screens/practices_screens/new_practice';
import practiceCollection from './screens/practices_screens/practice_collections';

import newCollection from './screens/collection_Screens/new_collection';


import patients from './screens/pa_screens/patients';
import registerPatient from './screens/pa_screens/register_patient';

import patient_words from './screens/patient_Screens/patient_words';
import collection_details from './screens/patient_Screens/collection_details';
import currentPractices from './screens/patient_Screens/appointment_practices';
import patientvisit from './screens/patient_Screens/Patient_visit';
import appointmentPracticeCollection from './screens/patient_Screens/appointment_practices_collection';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


global.BaseUrl='http://192.168.2.98/SlowLearnerApi/api/SlowLearner/'
global.BaseUrlForImages='http://192.168.2.98/SlowLearnerApi/'
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={login} options={{headerShown:false}}/>
      <Stack.Screen name="SignUp" component={signup} options={{headerShown:false}}/>  

      <Stack.Screen name="Admin" component={adminTab} options={{headerShown:false}}/>
      <Stack.Screen name="Levels" component={LevelTab} options={{headerShown:false}}/>
      <Stack.Screen name="MainTab" component={mainTab} options={{headerShown:false}}/>
      <Stack.Screen name="Collections" component={CollectionTab} options={{headerShown:false}}/>
      <Stack.Screen name="PatientTab" component={patientTab} options={{headerShown:false}}/>

      <Stack.Screen name="RegisterPa" component={registerPa} options={{headerShown:false}}/>
      <Stack.Screen name="AppointmentDetails" component={appointment_details} options={{headerShown:false}}/>
      <Stack.Screen name="NewCollection" component={newCollection} options={{headerShown:false}}/>
      <Stack.Screen name="NewPractice" component={newPractice} options={{headerShown:false}}/>
      <Stack.Screen name="PracticeCollection" component={practiceCollection} options={{headerShown:false}}/>
      <Stack.Screen name="DocPatients" component={doctor_patients} options={{headerShown:false}}/>


      <Stack.Screen name="RegisterPatient" component={registerPatient} options={{headerShown:false}}/>
      <Stack.Screen name="PAPatients" component={patients} options={{headerShown:false}}/>
      
      <Stack.Screen name="PatientWords" component={patient_words} options={{headerShown:false}}/>
      <Stack.Screen name="CurrentPractices" component={currentPractices} options={{headerShown:false}}/>
      <Stack.Screen name="PatientVisit" component={patientvisit} options={{headerShown:false}}/>
      <Stack.Screen name="CollectionDetails" component={collection_details} options={{headerShown:false}}/>
      <Stack.Screen name="AppPracticeCollection" component={appointmentPracticeCollection} options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;