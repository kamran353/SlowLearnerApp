import React, { useState } from 'react';
import { View, Image, StyleSheet,FlatList,Text ,TouchableOpacity} from 'react-native';
import CardView from 'react-native-cardview'
import { FloatingAction } from 'react-native-floating-action';

const appointMents = ({navigation}) => {
   const [allpatients,setAllpatients]=useState([
    {id:1,name:'Hassan',gender:'Male',Phone:'03439899999',date:'10-12-2021'},
    {id:2,name:'Asia',gender:'Female',Phone:'03439899999',date:'10-12-2021'},
    {id:3,name:'Anaya',gender:'Female',Phone:'03439899999',date:'10-12-2021'},
    {id:4,name:'Nadia',gender:'Female',Phone:'03439899999',date:'10-12-2021'},
    {id:5,name:'Shehzad',gender:'male',Phone:'03439899999',date:'10-12-2021'},
    {id:6,name:'Junaid',gender:'male',Phone:'03439899999',date:'10-12-2021'},
    {id:7,name:'Haseeb',gender:'male',Phone:'03439899999',date:'10-12-2021'},
    {id:8,name:'Zainab',gender:'Female',Phone:'03439899999',date:'10-12-2021'},
    {id:9,name:'Khuram',gender:'male',Phone:'03439899999',date:'10-12-2021'},

   ]);
  return (
    <View style={styles.container}>
     
     <FlatList

      style={{flex:1}}
      data={allpatients}
      renderItem={({item})=>(
        <CardView
       
          style={styles.listItem}
          cardElevation={5}
          cardMaxElevation={10}
          cornerRadius={8}>
            <View style={styles.imageView}>
            <Image  source={require('../../images/pa.png')} style={styles.imagstyle} resizeMode='contain'/>
    
            </View>
            <View style={styles.infoView}>
                 <Text style={styles.nameTxt}>{item.name}</Text>
                 <Text style={styles.otherTxt}>{item.Phone}</Text>
                 <Text style={styles.otherTxt}>{item.gender}</Text>
                 <Text style={styles.otherTxt}>{item.date}</Text>
            </View>
            <View style={styles.buttonView}>
             
                <TouchableOpacity  onPress={()=>navigation.navigate("AppointmentDetails")}> 
                    <Text style={styles.viewBtnTxt}>View</Text>
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
    height: '90%',
    borderRadius:1000,
    marginLeft:'10%'
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
  viewBtnTxt:{
    color:'#FFB133',
    fontSize:15
 }
 
});

export default appointMents;