import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet ,Text} from 'react-native';
import CardView from 'react-native-cardview'
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
const PaSetting = ({navigation}) => {
    const[User,setUser]=useState({UserName:'',UserPhone:'',UserGender:""});
    useEffect(()=>{
        AsyncStorage.getItem('User')
        .then((value) => {
          const user = JSON.parse(value).result;
          setUser(user);
        })
        .catch((error) => {
          console.log(error);
        });
    },[])
  return (
    <View style={styles.container}>
     <View style={styles.topView}>
       <Image  source={require('../../images/pa.png')} style={styles.imagstyle} resizeMode='contain'/>
       <Text style={styles.nameTxt}>{User.UserName}</Text>
       <Text style={styles.otherTxt}>{User.UserPhone}</Text>
       <Text style={styles.otherTxt}>{User.UserGender}</Text>
     </View>
     <View style={styles.bottomView}>

     <CardView
          style={styles.updateStyle}
          cardElevation={8}
          cardMaxElevation={10}
          cornerRadius={20}>
       


        <View style={styles.actionStyle}>

         <CardView
          style={styles.listItem}
          cardElevation={10}
          cardMaxElevation={10}
          cornerRadius={20}>
            <View style={styles.imageView}>
            <Image  source={require('../../images/plus-icon.jpg')} style={styles.actonImagStyle} resizeMode='contain'/>
    
            </View>
            <View style={styles.infoView}>
            <TouchableOpacity  onPress={()=>navigation.navigate('RegisterPatient',{Type:'Patient'})}>
              <Text style={styles.actoinTxt}>Add New Patient</Text>
              </TouchableOpacity>
            </View>
           
        </CardView>
      </View>


        <View style={styles.actionStyle}>
         <CardView
          style={styles.listItem}
          cardElevation={10}
          cardMaxElevation={10}
          cornerRadius={20}>
            <View style={styles.imageView}>
            <Image  source={require('../../images/plus-icon.jpg')} style={styles.actonImagStyle} resizeMode='contain'/>
    
            </View>
            <View style={styles.infoView}>
            <TouchableOpacity  onPress={()=>navigation.navigate('Levels')}>
              <Text style={styles.actoinTxt}>Levels</Text>
              </TouchableOpacity>
                 
            </View>
           
        </CardView>
       
        </View>

        <View style={styles.actionStyle}>
         <CardView
          style={styles.listItem}
          cardElevation={10}
          cardMaxElevation={10}
          cornerRadius={20}>
            <View style={styles.imageView}>
            <Image  source={require('../../images/plus-icon.jpg')} style={styles.actonImagStyle} resizeMode='contain'/>
    
            </View>
            <View style={styles.infoView}>
            <TouchableOpacity  onPress={()=>navigation.navigate('Collections')}>
              <Text style={styles.actoinTxt}>Collections</Text>
              </TouchableOpacity>
                 
            </View>
           
          </CardView>
       </View>
       <View style={styles.actionStyle}>
         <CardView
          style={styles.listItem}
          cardElevation={10}
          cardMaxElevation={10}
          cornerRadius={20}>
            <View style={styles.imageView}>
            <Image  source={require('../../images/patient.png')} style={styles.actonImagStyle} resizeMode='contain'/>
    
            </View>
            <View style={styles.infoView}>
            <TouchableOpacity  onPress={()=>navigation.navigate('Login')}>
              <Text style={styles.actoinTxt}>Logout</Text>
              </TouchableOpacity>
                 
            </View>
           
          </CardView>
       </View>
     </CardView>
     </View>

   

    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  
  imagstyle:{
    width: '35%', height: '45%',
    borderRadius:1000
  },
    
  actonImagStyle:{
    width: '45%', 
    height: '56%',
    borderRadius:1000,
    marginLeft:'20%'
  },
  topView:{
    height:'35%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F5CE9A'
  },
  bottomView:{
    height:'65%',
    backgroundColor:'#F5CE9A'
  },
  nameTxt:{
    color:'black',
    fontSize:20,
    fontWeight:'bold',
    marginTop:'2%'
  }, 
  actoinTxt:{
    color:'black',
    fontSize:20,
    fontWeight:'bold',
  
  }, 
  updateStyle:{
    width:'98%',
    height:'100%',
    marginHorizontal:'1%',
    marginVertical:'1%',
    alignItems:'center',
  
  },
  otherTxt:{
    color:'white',
    fontSize:15,
  
  },
  actionStyle:{
    height:'18%',
    flexDirection:'row',
    marginTop:'2%',
    paddingHorizontal:'2%'
  },
  imageView:{
    flex:2,
    justifyContent:'center',
    alignItems:'flex-start',
    
  },
  infoView:{
    flex:8,
    justifyContent:'center',
    alignItems:'flex-start'
  }
  ,
  listItem:{
    flex:1,
    flexDirection:'row',
    marginTop:'1%',
    height:70
    
  },
});

export default PaSetting;