import React, { useState ,useEffect} from 'react';
import { View, Image, StyleSheet,FlatList,Text ,TouchableOpacity} from 'react-native';
import CardView from 'react-native-cardview'
import axios from 'axios';
const practiceCollection = ({navigation,route}) => {
   const [PracticeCollection,SetPracticeCollection]=useState([]);
   useEffect(() => {
    GetPracticeCollection()
  },[]);
  function GetPracticeCollection(){
    axios.get(`${global.BaseUrl}GetAppointmentPracticeCollection?AppPracticeId=${route.params.AppPracticeId}`).then((response) => {
      SetPracticeCollection(response.data)
      
    }).catch(error=>console.log(error));
  }
  return (
    <View style={styles.container}>
     {PracticeCollection.length>0?
     <FlatList
      style={{flex:1,marginTop:5}}
      data={PracticeCollection}
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
                  <Text style={styles.rejectTxt}>{!item.IsAttempted?'Not Attempted':item.IsRight?'Correct':'Wrong'}</Text>
              </TouchableOpacity>
          </View>
        </CardView>
         )}
     />:<View style={{justifyContent:'center',alignItems:'center',flex:1}}>
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
    flex:6,
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
    flex:4,
    justifyContent:'center',
    alignItems:'center',
    paddingRight:'2%',
    flexDirection:'row',
    paddingBottom:'2%',
    paddingEnd:2
  },
  rejectTxt:{
    color:'#FFB133',
    fontSize:15
 }
});

export default practiceCollection;