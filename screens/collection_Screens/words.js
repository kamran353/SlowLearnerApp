import React, { useState ,useEffect} from 'react';
import { View, Image, StyleSheet,FlatList,Text ,TouchableOpacity} from 'react-native';
import CardView from 'react-native-cardview'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SoundPlayer from 'react-native-sound-player';
const words = ({navigation}) => {
  const [MyWords,SetWords]=useState([]);
  useEffect(() => {
    AsyncStorage.getItem('User')
    .then((value) => {
      const user = JSON.parse(value).result;
      console.log(value)
      getMyLetters(user.UserId)
    })
    .catch((error) => {
      console.log(error);
    });
     
  },[]);
  function getMyLetters(doctorId){
    axios.get(`${global.BaseUrl}GetMyCollection?Type=Word&&DoctorId=${doctorId}`).then((response) => {
      SetWords(response.data)
      });
  }
 function playAudio(url) {
    try {
      //SoundPlayer.playUrl(`${global.BaseUrlForImages}url`)
    } catch (e) {
      alert('Cannot play the file')
      console.log('cannot play the song file', e)
    }
  }

  return (
    <View style={styles.container}>
     
     <FlatList

      style={{flex:1,marginTop:5}}
      data={MyWords}
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
            <View style={styles.audioView}>
              <TouchableOpacity style={styles.btnLogin} onPress={()=>playAudio(item.CollectionAudio)}>
              <Text style={styles.txtLogin}>
                  Play
              </Text>
            </TouchableOpacity>
           </View>
        </CardView>
         )}
     />
     <TouchableOpacity
         onPress={()=>navigation.navigate('NewCollection')}
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
    flex:5,
    justifyContent:'center',
    alignItems:'flex-start'
  },
  audioView:{
    flex:5,
    justifyContent:'center',
    alignItems:'center'
  }
  ,
  imagstyle:{
    width: '75%', 
    height: '60%',
    borderRadius:50,
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
 },btnLogin:{
  height:40,
  width:100,
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
}
});

export default words;