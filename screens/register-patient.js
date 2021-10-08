import React, { useState } from 'react';
import { View, Text, Image, StyleSheet ,TextInput} from 'react-native';
import CardView from 'react-native-cardview'
import { TouchableOpacity } from 'react-native-gesture-handler';
import RadioGroup from 'react-native-radio-buttons-group';
import DatePicker from 'react-native-datepicker';
const radioButtonsData = [
    {
      id: '1',
      label: 'Male',
      value: 'Male',
      color: 'black',
      selected: true,
    },
    {
      id: '2',
      label: 'Female',
      value: 'Female',
      color: 'black',
      selected: false,
    },
  ];
  
const login =({navigation}) => {
    const [date, setDate] = useState('09-10-2020');
    const [radioButtons, setRadioButtons] = useState(radioButtonsData);

    const onPressRadioButton = radioButtonsArray => {
      console.log(radioButtonsArray);
      setRadioButtons(radioButtonsArray);
    };
  return (
    <View style={styles.container}>
     
     <View style={styles.ImageView}>
     <Image  source={require('../images/signupimage.png')} style={styles.imagstyle} resizeMode='stretch'/>
     </View>



     <View style={styles.LoginView}>
     <CardView
        style={styles.loginStyle}
          cardElevation={5}
          cardMaxElevation={10}
          cornerRadius={20}>
          <Text style={styles.heading}>
              Register Account
          </Text>
          <TextInput placeholder='Username' style={styles.txtInput}/>
          <TextInput placeholder='Password'  style={styles.txtInput} secureTextEntry={true}/>
          
          <TextInput placeholder='Mobile' style={styles.txtInput} keyboardType='phone-pad'/>
          <View style={styles.txtInput}>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
            layout="row"
          />
          </View>
          <View style={styles.txtDatePicker}>
              <View style={{flex:1,justifyContent:'center',paddingLeft:5}}>
               <Text>DOB</Text>
              </View>
              <View style={{flex:9}}>
              <DatePicker
          style={styles.datePickerStyle}
          date={date} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-1976"
          maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />

              </View>
          </View>
       
          <TouchableOpacity style={styles.btnLogin} onPress={()=>navigation.navigate('MainTab')}>
          <Text style={styles.txtLogin}>
              Register
          </Text>
          </TouchableOpacity>
     </CardView>
     </View>


    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ImageView:{
      flex:3,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#F5CE9A'
  },
  imagstyle:{
    width: '40%', height: '75%',borderRadius:1000
  }
  ,
  LoginView:{
      flex:7,
      backgroundColor:'#F5CE9A'
  },heading:{
    color:'black',
    fontSize:20,
    fontWeight:"bold"
  },
  loginStyle:{
    width:'98%',
    height:'100%',
    marginHorizontal:'1%',
    marginVertical:'1%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white'
  },
  txtInput:{
    paddingLeft:8,
    height:40,
    width:'76%',
    marginHorizontal:'12%',
    borderRadius:20,
    borderColor:'gray',
    borderWidth:1,
    marginTop:'5%'
  },txtDatePicker:{
    flexDirection:'row',
    paddingLeft:8,
    height:40,
    width:'76%',
    marginHorizontal:'12%',
    borderRadius:20,
    borderColor:'gray',
    borderWidth:1,
    marginTop:'5%'
  },
  btnLogin:{
    height:40,
    width:200,
    borderRadius:20,
    borderColor:'gray',
    borderWidth:1,
    marginTop:'5%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFB133'
  },
  txtLogin:{
    
    color:'white',
    fontSize:15,
    fontWeight:"bold"
   
  }, datePickerStyle: {
    width: 250,
    height:20
  }
});

export default login;