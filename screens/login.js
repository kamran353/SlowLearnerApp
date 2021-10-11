import React, { useState } from 'react';
import { View, Text, Image, StyleSheet ,TextInput} from 'react-native';
import CardView from 'react-native-cardview'
import { TouchableOpacity } from 'react-native-gesture-handler';
const login = ({navigation}) => {
 const [username,setUsername]=useState('');
 const [password,setPassword]=useState('');
  function LoginAccount(){
    if(username=='Admin' && password=='1234'){
      navigation.navigate('Admin');
    }else{
      navigation.navigate('MainTab')
    }
  }
  return (
    <View style={styles.container}>
     
     <View style={styles.ImageView}>
     <Image  source={require('../images/loginimage.jpg')} style={styles.imagstyle} resizeMode='stretch'/>
     </View>



     <View style={styles.LoginView}>
     <CardView
        style={styles.loginStyle}
          cardElevation={10}
          cardMaxElevation={10}
          cornerRadius={20}>
          <Text style={styles.heading}>
              Login Into Account
          </Text>
          <TextInput placeholder='Username' style={styles.txtInput} onChangeText={(val)=>setUsername(val)}/>
          <TextInput placeholder='Password'  style={styles.txtInput} secureTextEntry={true} onChangeText={(val)=>setPassword(val)}/>
          <TouchableOpacity style={styles.btnLogin} onPress={()=>LoginAccount()}>
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
      flex:4,
      backgroundColor:'#F5CE9A',
      justifyContent:'center',
      alignItems:'center'
  },
  imagstyle:{
    width: '40%', 
    height: '55%',
    borderRadius:1000
     
  }
  ,
  LoginView:{
      flex:6,
      backgroundColor:'#F5CE9A'
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