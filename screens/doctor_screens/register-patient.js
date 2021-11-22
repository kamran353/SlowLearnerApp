import React, { useState ,useEffect} from 'react';
import { View, Text, Image, StyleSheet ,TextInput} from 'react-native';
import CardView from 'react-native-cardview'
import { TouchableOpacity } from 'react-native-gesture-handler';
import RadioGroup from 'react-native-radio-buttons-group';
import DatePicker from 'react-native-datepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  
const login =({navigation,route}) => {
    const[User,SetUser]=useState(null)
    const [date, setDate] = useState('09-10-2020');
    const [radioButtons, setRadioButtons] = useState(radioButtonsData);
    const [FirstName,SetFirstName]=useState('');
    const [LastName,SetLastName]=useState('');
    const [UserPhone,SetUserphone]=useState('');
    const [UserPassword,SetUserpassword]=useState('');
    const [UserGender,SetUsergender]=useState('Male');

    useEffect(() => {
      AsyncStorage.getItem('User')
      .then((value) => {
        const user = JSON.parse(value).result;
        SetUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
    },[]);

    function RegisterAccount(){
      if(radioButtons[0].selected==false){
          SetUsergender('Female');
      }
      const user = { 
        UserName:  FirstName+" "+LastName,
        UserPhone:UserPhone,
        UserGender:UserGender,
        UserPassword:UserPassword,
        UserDOB:date,UserRole:route.params.Type,IsApproved:true,ReferenceUserId:User.UserId };
      axios.post(`${global.BaseUrl}RegisterUser`, user)
          .then(response => console.log(response.data.UserId));
    }
    const onPressRadioButton = radioButtonsArray => {
      console.log(radioButtonsArray);
      setRadioButtons(radioButtonsArray);
    };
  return (
    <View style={styles.container}>
    <View style={styles.LoginView}>
    <CardView
       style={styles.loginStyle}
         cardElevation={10}
         cardMaxElevation={10}
         cornerRadius={20}>
         <Text style={styles.heading}>
             Register Account For {route.params.Type}
         </Text>
         <View style={styles.InputView}>
          <Text style={styles.InputViewLabel}>First Name</Text>
          <TextInput placeholder='First Name' style={styles.txtInput} onChangeText={(val)=>SetFirstName(val)}/>
         </View>
         <View style={styles.InputView}>
          <Text style={styles.InputViewLabel}>Last Name</Text>
          <TextInput placeholder='Last Name' style={styles.txtInput} onChangeText={(val)=>SetLastName(val)}/>
         </View>
         <View style={styles.InputView}>
          <Text style={styles.InputViewLabel}>Password</Text>
          <TextInput placeholder='Password'  style={styles.txtInput} secureTextEntry={true} onChangeText={(val)=>SetUserpassword(val)}/>
         </View>
        
         <View style={styles.InputView}>
          <Text style={styles.InputViewLabel}>Phone Number</Text>
          <TextInput placeholder='Phone Number' style={styles.txtInput} keyboardType='phone-pad' onChangeText={(val)=>SetUserphone(val)}/>
         </View>

         <View style={styles.InputView}>
          <Text style={styles.InputViewLabel}>Gender</Text>
          <View style={styles.txtInput}>
         <RadioGroup
           radioButtons={radioButtons}
           onPress={onPressRadioButton}
           layout="row"
         />
         </View>
        </View>
      
         <View style={styles.txtDatePicker}>
             <View style={{flex:2,justifyContent:'center',paddingLeft:5}}>
              <Text>DOB</Text>
             </View>
             <View style={{flex:8}}>
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
      
         <TouchableOpacity style={styles.btnLogin} onPress={()=>RegisterAccount()}>
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
  LoginView:{
      flex:1,
      backgroundColor:'#F5CE9A'
  },
  heading:{
    color:'black',
    fontSize:20,
    fontWeight:"bold",
    marginBottom:'5%'
  },
  loginStyle:{
    width:'98%',
    height:'100%',
    marginHorizontal:'1%',
    marginVertical:'1%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white'
  },InputView:{
    paddingLeft:5,
    width:'106%',
    marginTop:'2%'
  },
  txtInput:{
    paddingLeft:8,
    height:40,
    width:'76%',
    marginHorizontal:'12%',
    borderRadius:20,
    borderColor:'gray',
    borderWidth:1,
    marginTop:'2%'
  },InputViewLabel:{
    marginLeft:'13%',
    color:'black',
    fontWeight:'bold'
  },
  txtDatePicker:{
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
    width: '100%',
    height:20
  }
});

export default login;