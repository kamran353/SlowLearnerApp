import React, { useState ,useEffect} from 'react';
import { View, Image, StyleSheet,FlatList,Text ,TouchableOpacity} from 'react-native';
import CardView from 'react-native-cardview'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const patient_visit = ({navigation,route}) => {
   const [Appointments,SetAppoinments]=useState([]);
   useEffect(() => {
    AsyncStorage.getItem('User')
    .then((value) => {
      const user = JSON.parse(value).result;
      console.log(value)
      getPatientappointments()
    })
    .catch((error) => {
      console.log(error);
    });
     
  },[]);
  function getPatientappointments(){
    console.log(`${global.BaseUrl}GetPatientAppointments?PatientId=${route.params.PatientId}`)
    axios.get(`${global.BaseUrl}GetPatientAppointments?PatientId=${route.params.PatientId}`).then((response) => {
        SetAppoinments(response.data)
      });
  }
  return (
    <View style={styles.container}>
     
     <FlatList

      style={{flex:1,marginTop:5}}
      data={Appointments}
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
                 <Text style={styles.nameTxt}>{item.AppDate.split('T')[0]}</Text>
                 <Text style={styles.nameTxt}>Level {item.LevelNo}</Text>
                 <Text style={styles.remarksTxt}>Remarks: {item.Remarks}</Text>
            </View>
            <View style={styles.buttonView}>
             
                <TouchableOpacity onPress={()=>navigation.navigate('CurrentPractices',{AppId:item.AppId})}> 
                    <Text style={styles.rejectTxt}>Details</Text>
                </TouchableOpacity>
       
            </View>
        </CardView>
         )}
     />
     
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
    height: '60%',
    borderRadius:10,
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
    fontSize:15,
    fontWeight:'bold',
   
  },
  otherTxt:{
    color:'gray',
    fontSize:15,
  
  },
  remarksTxt:{
    color:'gray'
  }
  ,
  buttonView:{
    flex:3,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    paddingRight:'2%',
    flexDirection:'row',
    paddingBottom:'2%',
    paddingEnd:20
  },
  rejectTxt:{
    color:'#FFB133',
    fontSize:15
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
});

export default patient_visit;