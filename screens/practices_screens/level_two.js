import React, { useState ,useEffect} from 'react';
import { View, Image, StyleSheet,FlatList,Text ,TouchableOpacity} from 'react-native';
import CardView from 'react-native-cardview'
import axios from 'axios';
import DropDownPicker from 'react-native-dropdown-picker';
const leveltwo= ({navigation}) => {
   const [levelOneWords,setLevelOneWords]=useState([]);
   const [open, setOpen] = useState(false);
   const [value, setValue] = useState(null);
   const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);
   useEffect(() => {
      getLevelOneWords()
  },[]);
  function getLevelOneWords(){
    axios.get(`${global.BaseUrl}GetLevelWords?WordLevel=1`).then((response) => {
        setLevelOneWords(response.data)
      });
  }
  return (
    <View style={styles.container}>
     
     <FlatList
      style={{flex:1,marginTop:5}}
      data={levelOneWords}
      renderItem={({item})=>(
        <CardView
          style={styles.listItem}
          cardElevation={5}
          cardMaxElevation={10}
          cornerRadius={8}>
            <View style={styles.imageView}>
            <Image  source={{uri:`${global.BaseUrlForImages}${item.ImagePath}`}} style={styles.imagstyle} resizeMode='contain'/>
    
            </View>
            <View style={styles.infoView}>
                 <Text style={styles.nameTxt}>{item.WordText}</Text>
                 <Text style={styles.otherTxt}>{item.WordCategory}</Text>
                 
            </View>
            <View style={styles.buttonView}>
             
                <TouchableOpacity onPress={()=>ApproveUnApproveDoctor(item.UserId,false)}> 
                    <Text style={styles.rejectTxt}>Add</Text>
                </TouchableOpacity>
       
            </View>
        </CardView>
         )}
     />

        <TouchableOpacity
         onPress={()=>navigation.navigate('RegisterPatient',{Type:'Patient'})}
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
    flex:7,
    justifyContent:'center',
    alignItems:'flex-start'
  }
  ,
  imagstyle:{
    width: '75%', 
    height: '90%',
    borderRadius:1000,
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
 }
});

export default leveltwo;