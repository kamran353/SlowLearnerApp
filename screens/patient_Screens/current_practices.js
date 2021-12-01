import React, { useState ,useEffect} from 'react';
import { View, Image, StyleSheet,FlatList,Text ,TouchableOpacity} from 'react-native';
import CardView from 'react-native-cardview'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const currentPractices = ({navigation,route}) => {
   const [levelOnePractices,setLevelOnePractices]=useState([]);
   const [User,SetUser]=useState(null);
   useEffect(() => {
    AsyncStorage.getItem('User')
    .then((value) => {
      const user = JSON.parse(value).result;
      console.log(value)
      SetUser(user)
      getMyCurrentPractices(user.UserId)
    })
    .catch((error) => {
      console.log(error);
    });
     
  },[]);
  function getMyCurrentPractices(patientId){
    axios.get(`${global.BaseUrl}MyCurrentPractices?Patient_Id=${patientId}&AppId=${route.params.AppId}`).then((response) => {
      setLevelOnePractices(response.data)
      });
  }
  function ShowNextAppointDate(){
    alert("Your Next Appointment Date is \n 12-10-2021")
  }
  return (
    <View style={styles.container}>
     <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',paddingLeft:10}}>
       <View style={{flex:1}}>
       <TouchableOpacity style={styles.btnLogin} onPress={()=>ShowNextAppointDate()}>
                <Text style={{color:'white'}}>
                    Next Visit
                </Text>
      </TouchableOpacity>
       </View>
       <View style={{flex:1}}>
       <TouchableOpacity style={styles.btnLogin} onPress={()=>navigation.navigate("PatientVisit",{PatientId:User.UserId})}>
                <Text style={{color:'white'}}>
                    Previous Visits
                </Text>
       </TouchableOpacity>
      </View>      
     </View>
     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
             <Text style={styles.nameTxt}>Current Appointment Practices</Text>
     </View>
     <View style={{flex:8}}>
     <FlatList

    style={{flex:1,marginTop:5}}
    data={levelOnePractices}
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
       
          <TouchableOpacity onPress={()=>navigation.navigate('PatientWords',{PracticeId:item.PracticeId})}> 
              <Text style={styles.rejectTxt}>View</Text>
          </TouchableOpacity>
 
      </View>
      </CardView>
      )}
      />

     </View>
     
    
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
 },
 btnLogin:{
   height:40,
   width:150,
   borderRadius:20,
   borderColor:'gray',
   borderWidth:1,
   marginTop:'10%',
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:'#FFB133'

 }
});

export default currentPractices;