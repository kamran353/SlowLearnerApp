import React, { useState ,useEffect} from 'react';
import { View, Image, StyleSheet,FlatList,Text ,TouchableOpacity} from 'react-native';
import CardView from 'react-native-cardview'
import axios from 'axios';
const currentPractices = ({navigation,route}) => {
   const [Practices,setPractices]=useState([]);
   useEffect(() => {
    getAppointmentPractices()
  },[]);
  function getAppointmentPractices(){
    axios.get(`${global.BaseUrl}AppointmentPractices?AppId=${route.params.AppId}`).then((response) => {
      setPractices(response.data)
    });
  }
  
  return (
    <View style={styles.container}>
    
     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
             <Text style={styles.nameTxt}> Appointment Exercises</Text>
     </View>
     <View style={{flex:9}}>
       {Practices.length>0?
     <FlatList
        style={{flex:1,marginTop:5}}
        data={Practices}
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
              <Text style={{...styles.nameTxt,marginTop:1}}>{item.PracticeTitle}</Text>
              <Text style={{fontSize:15,marginTop:1}}>Total Mcq's: {item.Total}</Text>
              <View style={styles.countView}>
              <Text style={{...styles.countTxt,color:'#FFB133'}}>Unattempted:{item.UnAttempted}</Text>
              <Text style={{...styles.countTxt,color:'green'}}>Correct:{item.TotalRight}</Text>
              <Text style={{...styles.countTxt,color:'red'}}>Wrong:{item.TotalWrong}</Text>
              </View>
          </View>
          <View style={styles.buttonView}>
         
             <TouchableOpacity onPress={()=>navigation.navigate('AppPracticeCollection',{AppPracticeId:item.AppPracticeId})}> 
                  <Text style={styles.rejectTxt}>View</Text>
              </TouchableOpacity>
    
          </View>
          </CardView>
          )}
        />:<View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <Text style={styles.nameTxt}>No Record</Text>
        </View>}

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
    flex:6,
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
    flex:4,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    paddingRight:'4%',  
    marginBottom:'3%'
  },
  countView:{
    justifyContent:'center',
    alignItems:'center',
    paddingRight:'2%',  
    flexDirection:'row',
    marginLeft:35,
    marginTop:10
  },
  countTxt:{
    fontSize:12,
    marginLeft:5,
  }
  ,
  rejectTxt:{
    color:'#FFB133',
    fontSize:19
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