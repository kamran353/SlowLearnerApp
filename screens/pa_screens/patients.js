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
     getMyAssistents(user.UserId)
   })
   .catch((error) => {
     console.log(error);
   });
 },[]);
 function getMyAssistents(PaId){
   axios.get(`${global.BaseUrl}GetPAPatients?PAId=${PaId}`).then((response) => {
     console.log(response.data);
     SetMyPatients(response.data)
   }).catch(error=>console.log(error));
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
 
});

export default patients;