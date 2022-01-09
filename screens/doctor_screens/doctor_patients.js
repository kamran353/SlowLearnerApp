import React, { useState ,useEffect} from 'react';
import { View, Image, StyleSheet,FlatList,Text ,TouchableOpacity} from 'react-native';
import CardView from 'react-native-cardview'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const patients = ({navigation}) => {
  const [MyPatients,SetMyPatients]=useState([]);
  useEffect(() => { 
   AsyncStorage.getItem('User')
   .then((value) => {
     const user = JSON.parse(value).result;
     console.log(value)
     getMyPatients(user.UserId)
   })
   .catch((error) => {
     console.log(error);
   });
 },[]);
 function getMyPatients(doctorId){
   axios.get(`${global.BaseUrl}GetDocPatients?DoctorId=${doctorId}`).then((response) => {
     console.log(response.data);
     SetMyPatients(response.data)
   }).catch(error=>console.log(error));
 }

 return (
   <View style={styles.container}>
    {MyPatients.length>0?
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
                <TouchableOpacity onPress={()=>navigation.navigate("PatientVisit",{PatientId:item.UserId})}> 
                    <Text style={styles.acceptTxt}>History</Text>
                </TouchableOpacity>
               
            </View>
       </CardView>
      
     )}
    />
      :<View style={{justifyContent:'center',alignItems:'center',flex:1}}>
      <Text style={styles.nameTxt}>No Record</Text>
    </View>}

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
 }
});

export default patients;