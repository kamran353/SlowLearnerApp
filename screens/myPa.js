import React, { useState } from 'react';
import { View, Image, StyleSheet,FlatList,Text ,TouchableOpacity} from 'react-native';
import CardView from 'react-native-cardview'
import { FloatingAction } from 'react-native-floating-action';

const myPa = ({navigation}) => {
   const [allpatients,setAllpatients]=useState([
     {id:1,name:'ikram',gender:'male',Phone:'03439309357'},
     {id:2,name:'irfan',gender:'male',Phone:'03439309357'},
     {id:3,name:'jibran',gender:'male',Phone:'03439309357'},
     {id:4,name:'ali',gender:'male',Phone:'03439309357'},
     {id:5,name:'ahmed',gender:'male',Phone:'03439309357'},
     {id:6,name:'ikram',gender:'male',Phone:'03439309357'},
     {id:7,name:'irfan',gender:'male',Phone:'03439309357'},
     {id:8,name:'jibran',gender:'male',Phone:'03439309357'},
     {id:9,name:'ali',gender:'male',Phone:'03439309357'},
     {id:10,name:'ahmed',gender:'male',Phone:'03439309357'}

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
            <Image  source={require('../images/pa.png')} style={styles.imagstyle} resizeMode='contain'/>
    
            </View>
            <View style={styles.infoView}>
                 <Text style={styles.nameTxt}>{item.name}</Text>
                 <Text style={styles.otherTxt}>{item.Phone}</Text>
                 <Text style={styles.otherTxt}>{item.gender}</Text>
            </View>
           
        </CardView>
       
      )}
     />
  <TouchableOpacity
        onPress={()=>navigation.navigate('RegisterPatient')}
          activeOpacity={1}
          style={styles.touchableOpacityStyle}>
          <Image
            source={require('../images/plus-icon.jpg')}
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

export default myPa;