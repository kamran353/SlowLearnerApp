import React, { useState ,useEffect} from 'react';
import { View, Image, StyleSheet,FlatList,Text ,TouchableOpacity} from 'react-native';
import CardView from 'react-native-cardview'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Modal from 'react-native-modal'
import DatePicker from 'react-native-datepicker';
import RadioGroup from 'react-native-radio-buttons-group';
const radioButtonsData = [
  {
    id: '1',
    label: 'Level 1',
    value: '1',
    color: 'black',
    selected: true,
  },
  {
    id: '2',
    label: 'Level 2',
    value: '2',
    color: 'black',
    selected: false,
  },
  {
      id: '3',
      label: 'Level 3',
      value: '3',
      color: 'black',
      selected: false,
    },
];
const patients = ({navigation}) => {
  const [MyPatients,SetMyPatients]=useState([]);
  const[IsShown,SetShown]=useState(false)
  const[CurrentDoctorId,SetDoctorId]=useState(0)
  const[PatientId,SetPatientId]=useState(0)
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const [date, setDate] = useState('01-01-2021');
  useEffect(() => {
    
   AsyncStorage.getItem('User')
   .then((value) => {
     const user = JSON.parse(value).result;
     console.log(value)
     SetDoctorId(user.ReferenceUserId)
     getPApatients(user.UserId)
   })
   .catch((error) => {
     console.log(error);
   });
 },[]);
 function getPApatients(PaId){
   axios.get(`${global.BaseUrl}GetPAPatients?PAId=${PaId}`).then((response) => {
     console.log(response.data);
     SetMyPatients(response.data)
   }).catch(error=>console.log(error));
 }
 function ShowModal(userId){
    SetPatientId(userId)
    SetShown(true)
 }
  const SetAppointment=async()=>{
    var Level=await GetRadioButtonValue();
    const Appointment = { 
      AppDate: date,
      DoctorId:CurrentDoctorId,
      PatientId:PatientId,
      Remarks:'',
      IsActive:false,IsComplete:false,LevelNo:Level };
    axios.post(`${global.BaseUrl}SetNewAppointment`, Appointment)
        .then(response =>{
          if(response.status==200){
            alert("Appointment set Successfully")
            SetShown(false)
          }
         
        })
        .catch(error=>alert("Network Error"));
    
  }
  const onPressRadioButton =async(radioButtonsArray) => {
    console.log(radioButtonsArray);
    setRadioButtons(radioButtonsArray);
  
  };
  const GetRadioButtonValue= async()=>{
      for(var i=0;i<radioButtons.length;i++){
          if(radioButtons[i].selected==true){
              return radioButtons[i].value
          }
      }
  }
 return (
   <View style={styles.container}>
    
    <FlatList
     style={{flex:1}}
     data={MyPatients}
     renderItem={({item})=>(
       <CardView
         style={styles.listItem}
         cardElevation={5}
         cardMaxElevation={10}
         cornerRadius={8}>
           <View style={styles.imageView}>
           <Image  source={require('../../images/patient.png')} style={styles.imagstyle} resizeMode='contain'/>
   
           </View>
           <View style={styles.infoView}>
                <Text style={styles.nameTxt}>{item.UserName}</Text>
                <Text style={styles.otherTxt}>{item.UserPhone}</Text>
                <Text style={styles.otherTxt}>{item.UserGender}</Text>
           </View>
           <View style={styles.buttonView}>
                <TouchableOpacity onPress={()=>ShowModal(item.UserId)}> 
                    <Text style={styles.acceptTxt}>Set Visit</Text>
                </TouchableOpacity>
               
       
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity onPress={()=>navigation.navigate("PatientVisit",{PatientId:item.UserId})}> 
                    <Text style={styles.acceptTxt}>History</Text>
                </TouchableOpacity>
               
            </View>
       </CardView>
      
     )}
    />
      <TouchableOpacity
         onPress={()=>navigation.navigate('RegisterPatient',{Type:'Patient'})}
          activeOpacity={1}
          style={styles.touchableOpacityStyle}>
          <Image
            source={require('../../images/plus-icon.jpg')}
             style={styles.floatingButtonStyle}
          />
        </TouchableOpacity>
        <Modal isVisible={IsShown}>
         <View style={{ flex: 1,backgroundColor:'white',width:'100%',justifyContent:'center',alignItems:'center' }}>
         <View style={styles.txtDatePicker}>
              <View style={{flex:2,justifyContent:'center',paddingLeft:5}}>
               <Text>Date</Text>
              </View>
              <View style={{flex:8}}>
              <DatePicker
                  style={styles.datePickerStyle}
                  date={date} // Initial date from state
                  mode="date" // The enum of date, datetime and time
                  placeholder="select date"
                  format="DD-MM-YYYY"
                  maxDate="01-01-2030"
                  minDate="01-01-2021"
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
          <View style={styles.txtInput}>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
            layout="row"
          />
          </View>
          <TouchableOpacity style={styles.btnLogin} onPress={SetAppointment}>
                <Text style={{color:'white'}}>
                    Set Appointment
                </Text>

          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:'2%',
    paddingTop:'2%'
  },
  imageView:{
    flex:3,
    justifyContent:'center',
    alignItems:'flex-start',
    
  },
  infoView:{
    flex:7,
    justifyContent:'center',
    alignItems:'flex-start'
  }
  ,
  imagstyle:{
    width: '75%', 
    height: '90%',
    borderRadius:1000,
    marginLeft:'10%',
   
  }
  ,
  listItem:{
    flex:3,
    flexDirection:'row',
    marginTop:'1%',
    height:100
    
  },
  nameTxt:{
    color:'black',
    fontSize:20,
    fontWeight:'bold',
   
  },
  otherTxt:{
    color:'gray',
    fontSize:15,
  
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
    borderRadius:1000
    //backgroundColor:'black'
  }
  ,
  buttonView:{
    flex:3,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    paddingRight:'2%',
    flexDirection:'row',
    paddingBottom:'2%'
  },
  acceptTxt:{
    color:'#FFB133',
    fontSize:15
 }, 
 datePickerStyle: {
  width: '100%',
  height:20
},
txtDatePicker:{
  flexDirection:'row',
  paddingLeft:8,
  height:40,
  width:'96%',
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
},txtInput:{
  paddingLeft:8,
  height:40,
  width:'96%',
  marginHorizontal:'12%',
  borderRadius:20,
  borderColor:'gray',
  borderWidth:1,
  marginTop:'8%'
},
});

export default patients;