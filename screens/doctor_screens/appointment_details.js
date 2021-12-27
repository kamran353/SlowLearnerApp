import React, { useState,useEffect } from 'react';
import { View, Image, StyleSheet ,Text,FlatList,TextInput} from 'react-native';
import CardView from 'react-native-cardview'
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
const appointment_details = ({navigation,route}) => {
  const [levelPractices,setLevelPractices]=useState([]);
  const[Remarks,setRemarks]=useState(null)
  const[PracticeIds,SetPracticeIds]=useState([])
  const[AddOrRemove,SetAddOrRemove]=useState(true)
  const[LastAppointment,SetLastAppointment]=useState(null)
  useEffect(() => {
   AsyncStorage.getItem('User')
   .then((value) => {
     const user = JSON.parse(value).result;
     console.log(value)
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
     }).catch(error=>console.log(error+" notttttt found "+route.params.AppId))
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
               <TouchableOpacity style={styles.btnHistory} onPress={()=>navigation.navigate("PatientVisit",{PatientId:3005})}> 
                    <Text style={styles.btnHistoryTxt}>History</Text>
                </TouchableOpacity>
               </View>
                
            </View>
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

          <TextInput placeholder='Enter Remarks' style={styles.txtInput} onChangeText={(val)=>setRemarks(val)}/>
         
          <TouchableOpacity style={styles.btnLogin} onPress={()=>SaveAppointment()}>
          <Text style={styles.txtLogin}>
              Save Changes
          </Text>
          </TouchableOpacity>
     </CardView>
    


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
    flexDirection:'row'
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
    justifyContent:'flex-end',
    alignItems:'flex-end',
    paddingBottom:'2%',
   
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
  }
});

export default appointment_details;