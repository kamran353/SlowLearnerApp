import React from 'react';
import login from './screens/loginSignUp_screens/login';
import signup from './screens/loginSignUp_screens/signup'
import Splash from './screens/loginSignUp_screens/splash';

import registerPa from './screens/doctor_screens/register-pa'
import doctor_patients from './screens/doctor_screens/doctor_patients'
import appointment_details from './screens/doctor_screens/appointment_details';
import one_blank_template from './screens/template_screens/one_blank_template';
import two_blank_template from './screens/template_screens/two_blank_template';
import add_new_template from  './screens/template_screens/add_new_template';
import allTemplates from './screens/template_screens/all_templates';

import mainTab from './tabNavigation/mainTab';
import adminTab from './tabNavigation/adminTab';
import LevelTab from './tabNavigation/level_tab';
import CollectionTab from './tabNavigation/collectionTab';
import patientTab from './tabNavigation/patientTab'
import templateTab from './tabNavigation/templateTab';


import newPractice from './screens/practices_screens/new_practice';
import practiceCollection from './screens/practices_screens/practice_collections';

import newCollection from './screens/collection_Screens/new_collection';


import paTab from './tabNavigation/paTab';
import registerPatient from './screens/pa_screens/register_patient';

import patient_words from './screens/patient_Screens/patient_words';
import collection_details from './screens/patient_Screens/collection_details';
import currentPractices from './screens/patient_Screens/appointment_practices';
import patient_visit from './screens/patient_Screens/Patient_visit';
import appointmentPracticeCollection from './screens/patient_Screens/appointment_practices_collection';


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
      <Stack.Screen name="SignUp" component={signup} options={{headerShown:false}}/>  

      <Stack.Screen name="Admin" component={adminTab} options={{headerShown:false}}/>
      <Stack.Screen name="Levels" component={LevelTab} options={{headerShown:false}}/>
      <Stack.Screen name="MainTab" component={mainTab} options={{headerShown:false}}/>
      <Stack.Screen name="Collections" component={CollectionTab} options={{headerShown:false}}/>
      <Stack.Screen name="PatientTab" component={patientTab} options={{headerShown:false}}/>
      <Stack.Screen name="TemplateTab" component={templateTab} options={{headerShown:false}}/>

      <Stack.Screen name="RegisterPa" component={registerPa} options={{headerShown:false}}/>
      <Stack.Screen name="AppointmentDetails" component={appointment_details} options={{headerShown:false}}/>
      <Stack.Screen name="NewCollection" component={newCollection} options={{headerShown:false}}/>
      <Stack.Screen name="NewPractice" component={newPractice} options={{headerShown:false}}/>
      <Stack.Screen name="PracticeCollection" component={practiceCollection} options={{headerShown:false}}/>
      <Stack.Screen name="DocPatients" component={doctor_patients} options={{headerShown:false}}/>
      <Stack.Screen name="OneBlankTemplate" component={one_blank_template} options={{headerShown:false}}/>
      <Stack.Screen name="TwoBlankTemplate" component={two_blank_template} options={{headerShown:false}}/>
      <Stack.Screen name="AddNewTemplate" component={add_new_template} options={{headerShown:false}}/>
      <Stack.Screen name="AllTemplates" component={allTemplates} options={{headerShown:false}}/>
      
      

      <Stack.Screen name="RegisterPatient" component={registerPatient} options={{headerShown:false}}/>
      <Stack.Screen name="PATab" component={paTab} options={{headerShown:false}}/>
      
      <Stack.Screen name="PatientWords" component={patient_words} options={{headerShown:false}}/>
      <Stack.Screen name="CurrentPractices" component={currentPractices} options={{headerShown:false}}/>
      <Stack.Screen name="PatientVisit" component={patient_visit} options={{headerShown:false}}/>
      <Stack.Screen name="CollectionDetails" component={collection_details} options={{headerShown:false}}/>
      <Stack.Screen name="AppPracticeCollection" component={appointmentPracticeCollection} options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;