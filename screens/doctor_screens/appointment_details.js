import React, { useState } from 'react';
import { View, Image, StyleSheet ,Text,FlatList,TextInput} from 'react-native';
import CardView from 'react-native-cardview'
import { TouchableOpacity } from 'react-native-gesture-handler';
const appointment_details = ({navigation}) => {
    const [practices,setPractices]=useState([
        {id:1,name:'Fruits'},
        {id:2,name:'Staionary'},
        {id:3,name:'Foods'},
        {id:4,name:'Vegitables'},
        {id:5,name:'Glaaxies'},
        {id:6,name:'Cosmatics'},
        {id:7,name:'Sports'}
     ]);
  return (
    <View style={styles.container}>
     <View style={styles.topView}>
       <Image  source={require('../../images/loginimage.jpg')} style={styles.imagstyle} resizeMode='contain'/>
       <Text style={styles.nameTxt}>Ahmed Khan</Text>
       <Text style={styles.otherTxt}>03453438888</Text>
       <Text style={styles.otherTxt}>Male</Text>
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
            
            <View style={styles.infoView}>
            <TouchableOpacity  onPress={()=>navigation.navigate('RegisterPatient',{Type:'Patient'})}>
               <Text style={styles.actoinTxt}>Date : 12-10-2021 </Text>
               <Text style={styles.actoinTxt}>Level : 1</Text>
               <Text style={styles.actoinTxt}>Remarks : ___________________</Text>
              </TouchableOpacity>
               
             </View>
           
        </CardView>
       
        </View>
   
         <CardView
          style={styles.listItem}
          cardElevation={10}
          cardMaxElevation={10}
          cornerRadius={20}>
          
          <FlatList  
            style={{flex:1}}
            data={practices}
            renderItem={({item})=>(
             <CardView
                style={{flex:1,marginTop:10}}
                cardElevation={5}
                cardMaxElevation={10}
                cornerRadius={8}>
                <View style={{flex:1,paddingLeft:10}}>
                 <Text style={styles.nameTxt}>{item.name}</Text>
                  
               </View>
             </CardView>
                            
                  )}
                 />
                 <View
                 style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                      <TextInput placeholder='Enter Remarks' style={styles.txtInput}/>
                      <TouchableOpacity style={styles.btnLogin}>
                        <Text style={styles.txtLogin}>
                            Save Changes
                        </Text>
                      </TouchableOpacity>
                 </View>
        </CardView>
       
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
    paddingHorizontal:'2%'
  },
  otherTxt:{
    color:'white',
    fontSize:15,
  
  },
  actionStyle:{
    height:'18%',
    flexDirection:'row',
    marginTop:'2%',
   
  },
  infoView:{
    flex:1,
    justifyContent:'center',
    alignItems:'flex-start',
    padding:10
  }
  ,
  listItem:{
    flex:1,
    marginTop:'1%',
   },
   txtInput:{
    paddingLeft:8,
    height:90,
    width:'86%',
    marginHorizontal:'6%',
    borderRadius:20,
    borderColor:'gray',
    borderWidth:1,
    marginTop:'5%',
   
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
    backgroundColor:'#FFB133',
   
  },
  txtLogin:{
    
    color:'white',
    fontSize:15,
    fontWeight:"bold"
   
  },
});

export default appointment_details;