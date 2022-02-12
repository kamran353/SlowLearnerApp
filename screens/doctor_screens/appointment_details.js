import React, { useState,useEffect } from 'react';
import { View, Image, StyleSheet ,Text,FlatList,TextInput} from 'react-native';
import CardView from 'react-native-cardview'
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import Modal from 'react-native-modal'
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
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
const appointment_details = ({navigation,route}) => {
  const[User,setUser]=useState()
  const [levelPractices,setLevelPractices]=useState([]);
  const[Remarks,setRemarks]=useState(null)
  const[VisitNo,setVisitNo]=useState()
  const[PracticeIds,SetPracticeIds]=useState([])
  const[AddOrRemove,SetAddOrRemove]=useState(true)
  const[IsShown,SetShown]=useState(false)
  const [date, setDate] = useState('01-01-2021');
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const[LastAppointment,SetLastAppointment]=useState(null)
  useEffect(() => {
   AsyncStorage.getItem('User')
   .then((value) => {
     const user = JSON.parse(value).result;
     console.log(value)
     setUser(user)
     getMyLevelPracticesAndLastAppointmentOfPatient(user.UserId)
   })
   .catch((error) => {
     console.log(error);
   });
    
 },[PracticeIds,AddOrRemove]);
 function getMyLevelPracticesAndLastAppointmentOfPatient(doctorId){
   axios.get(`${global.BaseUrl}GetMyLevelPracticesAndLastAppointmentOfPatient?PracticeLevel=${route.params.LevelNo}&&DoctorId=${doctorId}&PatientId=${route.params.PatientId}`).then((response) => {
       setLevelPractices(response.data.Practices)
       SetLastAppointment(response.data.LastAppointment)
       setVisitNo(response.data.VisitNo)
     }).catch(error=>console.log(error+" not found "+route.params.AppId))
 }
 function AddOrRemovePractice(practiceId){
  var index=PracticeIds.indexOf(practiceId);
  if(index>-1){
    PracticeIds.splice(index,1)
  }else{
    PracticeIds.push(practiceId)
  }
  SetPracticeIds(PracticeIds)
  SetAddOrRemove(!AddOrRemove)
  console.log(PracticeIds)
}
function SaveAppointment(){
  const app = { 
    Remarks: Remarks,
    PracticeIds:PracticeIds.toString(),
    AppId:route.params.AppId
  };
  axios.post(`${global.BaseUrl}SetAppointmentPractices`, app)
      .then(response =>{
        if(response.status==200){
          alert("Save Successfully")
          SetPracticeIds([])
          SetAddOrRemove(true)
        }
      }).catch(error=>console.log(error));
}
const GetRadioButtonValue= async()=>{
  for(var i=0;i<radioButtons.length;i++){
      if(radioButtons[i].selected==true){
          return radioButtons[i].value
      }
  }
}
const onPressRadioButton =async(radioButtonsArray) => {
  console.log(radioButtonsArray);
  setRadioButtons(radioButtonsArray);

};
const SetAppointment=async()=>{
  var Level=await GetRadioButtonValue();
  const Appointment = { 
    AppDate: date,
    DoctorId:User.UserId,
    PatientId:route.params.PatientId,
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
  return (
    <View style={styles.container}>
     
     <CardView
        style={styles.loginStyle}
          cardElevation={5}
          cardMaxElevation={10}
          cornerRadius={20}>
            <View style={styles.LastAppointment}>
              { LastAppointment!=null?
                <View style={styles.DetailView}>
                  <Text style={styles.DetailTxt}>Date: {LastAppointment.AppDate.toString().split('T')[0]}</Text>
                 <Text style={styles.DetailTxt}>Level: Level No {LastAppointment.LevelNo}</Text>
                 <Text style={styles.DetailTxt}>Remarks:{LastAppointment.Remarks}</Text>
                 
                 </View>
                 :null
              }
               <View style={styles.buttonHistoryView}>
               <Text style={styles.btnHistoryTxt}>VisitNo:{VisitNo==0?1:VisitNo}</Text>
               <TouchableOpacity style={styles.btnHistory} onPress={()=>navigation.navigate("PatientVisit",{PatientId:route.params.PatientId})}> 
                    <Text style={styles.btnHistoryTxt}>History</Text>
                </TouchableOpacity>
            
               </View>
                
            </View>
            {levelPractices.length>0?
          <FlatList
            style={styles.FlatListStyle}
            data={levelPractices}
            renderItem={({item})=>(
            <CardView
                style={styles.listItem}
                cardElevation={5}
                cardMaxElevation={10}
                cornerRadius={8}>
                  <View style={styles.imageView}>
                  <Image   source={require('../../images/practice.jpg')} style={styles.imagstyle} resizeMode='contain'/>
          
                  </View>
                  <View style={styles.infoView}>
                      <Text style={styles.nameTxt}>{item.PracticeTitle}</Text>
                  </View>
                  <View style={styles.buttonView}>
                  <CheckBox
                    disabled={false}
                    value={PracticeIds.indexOf(item.PracticeId)>-1?true:false}
                    onValueChange={(newValue) => AddOrRemovePractice(item.PracticeId)}
                  />
                 </View>
              </CardView>
            
                )}
              />
              :<View style={{justifyContent:'center',alignItems:'center',flex:1}}>
              <Text style={styles.nameTxt}>No Exercises</Text>
              </View>
            }

          <TextInput placeholder='Enter Remarks' style={styles.txtInput} onChangeText={(val)=>setRemarks(val)}/>
         
          <TouchableOpacity style={styles.btnLogin} onPress={()=>SaveAppointment()}>
            <Text style={styles.txtLogin}>
                Save Changes
            </Text>
          </TouchableOpacity>
         
          <View style={styles.btnLogin}>
                <TouchableOpacity onPress={()=>SetShown(true)}> 
                    <Text style={styles.txtLogin}>Next Visit</Text>
                </TouchableOpacity>
            </View>
         
     </CardView>
    

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
          <TouchableOpacity style={styles.btnLogin} onPress={alert("Hi")}>
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
    flex: 1
  }
  ,
  loginStyle:{
    width:'98%',
    flex:1,
    marginHorizontal:'1%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white',
    paddingTop:'5%'
  },
  LastAppointment:{
    paddingHorizontal:8,
    height:'15%',
    width:'86%',
    marginHorizontal:'12%',
    justifyContent:'flex-start',
    alignContent:'flex-start',
  },
  acceptTxt:{
    color:'#FFB133',
    fontSize:15
 },
  FlatListStyle:{
    paddingHorizontal:8,
    height:'20%',
    width:'90%',
    marginHorizontal:'12%',
    marginTop:'1%'
  },
  txtInput:{
    paddingHorizontal:8,
    height:'10%',
    width:'86%',
    marginHorizontal:'12%',
    borderRadius:20,
    borderColor:'gray',
    borderWidth:1,
    marginTop:'3%'
  },
  acceptTxt:{
    color:'#FFB133',
    fontSize:15
 },
  btnLogin:{
    height:'25%',
    width:200,
    borderRadius:20,
    borderColor:'gray',
    borderWidth:1,
    marginTop:'2%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFB133'
  },
  txtLogin:{
     color:'white',
    fontSize:15,
    fontWeight:"bold"
  } 
  , 
  imageView:{
    flex:3,
    justifyContent:'center',   
  },
  infoView:{
    flex:7,
    height:70,
    justifyContent:'center',
    alignItems:'flex-start'
  }
  ,
  imagstyle:{
    width: '75%', 
    height: '70%',
    borderRadius:10,
    marginLeft:'2%',
  }
  ,
  listItem:{
    flex:1,
    flexDirection:'row',
    marginTop:'1%',   
  },
  buttonView:{
    flex:3,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    paddingBottom:'2%',
    backgroundColor:'#FFB133'
  }, 
  DetailTxt:{
    color:'black',
    fontSize:15,
    fontWeight:'bold',
  },
  btnHistoryTxt:{
    color:'#FFB133',
    fontSize:15,
    fontWeight:'bold',
  },
  buttonHistoryView:{
    flex:2,
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom:'2%',
    flexDirection:'row'
   
  },
  DetailView:{
    flex:8,
    height:70,
    justifyContent:'center',
    alignItems:'flex-start'
  },
  btnHistory:{
    justifyContent:'center',
    alignItems:'center',
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
});

export default appointment_details;