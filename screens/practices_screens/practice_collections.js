import React, { useState ,useEffect} from 'react';
import { View, Image, StyleSheet,FlatList,Text ,TouchableOpacity} from 'react-native';
import CardView from 'react-native-cardview'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const practiceCollection = ({navigation,route}) => {
   const [MyLetters,SetLetters]=useState([]);
   useEffect(() => {
    AsyncStorage.getItem('User')
    .then((value) => {
      const user = JSON.parse(value).result;
      getMyLetters(user.UserId)
    })
    .catch((error) => {
      console.log(error);
    });
     
  },[]);
  function getMyLetters(doctorId){
    axios.get(`${global.BaseUrl}GetMyCollection?Type=Letter&&DoctorId=${doctorId}`).then((response) => {
      SetLetters(response.data)
      });
  }
  return (
    <View style={styles.container}>
     
     <FlatList

      style={{flex:1,marginTop:5}}
      data={MyLetters}
      renderItem={({item})=>(
        <CardView
          style={styles.listItem}
          cardElevation={5}
          cardMaxElevation={10}
          cornerRadius={8}>
            <View style={styles.imageView}>
             <Image  source={{uri:`${global.BaseUrlForImages}${item.CollectionImage}`}} style={styles.imagstyle} resizeMode='contain'/>
    
            </View>
            <View style={styles.infoView}>
            <Text style={styles.nameTxt}>{item.CollectionText}</Text>
            </View>
            <View style={styles.buttonView}>
             <TouchableOpacity> 
                  <Text style={styles.rejectTxt}>Remove</Text>
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
    borderRadius:30,
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
 }
});

export default practiceCollection;