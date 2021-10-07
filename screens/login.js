import React, { useState } from 'react';
import { View, Text, Image, StyleSheet ,TextInput} from 'react-native';
import CardView from 'react-native-cardview'
import { TouchableOpacity } from 'react-native-gesture-handler';
const login = ({navigation}) => {
 

  return (
    <View style={styles.container}>
     
     <View style={styles.ImageView}>
     <Image  source={require('../images/loginimage.jpg')} style={styles.imagstyle} resizeMode='stretch'/>
     </View>



     <View style={styles.LoginView}>
     <CardView
        style={styles.loginStyle}
          cardElevation={5}
          cardMaxElevation={10}
          cornerRadius={8}>
          <Text style={styles.heading}>
              Login Into Account
          </Text>
          <TextInput placeholder='Username' style={styles.txtInput}/>
          <TextInput placeholder='Password'  style={styles.txtInput} secureTextEntry={true}/>
          <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.txtLogin}>
              Login
          </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop:'2%'}} onPress={()=>navigation.navigate('SignUp')}>
          <Text style={styles.txtSignUp}>
              Don't Have An Account?
          </Text>
          </TouchableOpacity>
         
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
  ImageView:{
      flex:4
  },
  imagstyle:{
    width: '100%', height: '100%'
  }
  ,
  LoginView:{
      flex:6
  },heading:{
    color:'black',
    fontSize:20,
    fontWeight:"bold"
  },
  loginStyle:{
    width:'98%',
    height:'100%',
    marginHorizontal:'1%',
    marginVertical:'1%',
    alignItems:'center',
    justifyContent:'center'
  },
  txtInput:{
    paddingLeft:8,
    height:40,
    width:'76%',
    marginHorizontal:'12%',
    borderRadius:20,
    borderColor:'gray',
    borderWidth:1,
    marginTop:'5%'
  },
  btnLogin:{
    height:40,
    width:200,
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
   
  },
  txtSignUp:{
    color:'gray',
    marginTop:'3%',
    fontSize:15
  }
});

export default login;