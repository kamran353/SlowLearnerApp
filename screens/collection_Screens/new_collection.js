import React, { useState,useEffect } from 'react';
import { View, Text, Image, StyleSheet ,TextInput,Button} from 'react-native';
import CardView from 'react-native-cardview'
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import RadioGroup from 'react-native-radio-buttons-group';
import { launchImageLibrary  } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DocumentPicker  from 'react-native-document-picker';
const radioButtonsData = [
    {
      id: '1',
      label: 'Letter',
      value: 'Letter',
      color: 'black',
      selected: true,
    },
    {
      id: '2',
      label: 'Word',
      value: 'Word',
      color: 'black',
      selected: false,
    },
    {
        id: '3',
        label: 'Sentence',
        value: 'Sentence',
        color: 'black',
        selected: false,
      },
  ];
  
const newCollection =({navigation}) => {
    const [radioButtons, setRadioButtons] = useState(radioButtonsData);
    const [Description, setDescription] = useState('');
    const [photo, setPhoto] = useState(null);
    const [audio, setAudio] = useState(null);
    const[audioName,setAudioName]=useState('No Audio Selected')
    const[User,SetUser]=useState(null)
    useEffect(() => {
      AsyncStorage.getItem('User')
      .then((value) => {
        const user = JSON.parse(value).result;
        SetUser(user)
      })
      .catch((error) => {
        console.log(error);
      });
    },[]);
    const onPressRadioButton =async(radioButtonsArray) => {
        console.log(radioButtonsArray);
        setRadioButtons(radioButtonsArray);
      
      };
      const GetRadioButtonValue= async()=>{
          for(var i=0;i<radioButtons.length;i++){
              if(radioButtons[i].selected==true){
                  return radioButtons[i].value
              }
          }
      } 
const SaveCollection= async()=>{
if(photo==null)
{
  alert("Please select photo")
}else if(audio==null)
{
  alert("Please select audio")
}else if(Description.length==0)
{
  alert("Please Enter Text")
}

  else{      var type=await  GetRadioButtonValue();
      var  formData=new FormData();
        formData.append("CollectionText",Description);
        formData.append("CollectionType",type);
        formData.append("DoctorId",User.UserRole=="PA"?User.ReferenceUserId:User.UserId);
        formData.append("Photo",{name:photo.fileName,type:photo.type,uri:photo.uri});
        formData.append("Audio",{name:audio.name,type:audio.type,uri:audio.uri});
        axios({
            url:`${global.BaseUrl}AddNewCollection`,
            method:'POST',
            headers:{
              'Content-Type':'application/x-www-form-urlencoded'
            },
            data:formData
        }).then(function(response){
           console.log(response)
           if(response.status==200){
               alert("Added Successfully")
           }
        }).catch((error) =>{
            alert("Something Went Wrong")
        });
      }
   }
       const handleChoosePhoto = () => {
        launchImageLibrary({ noData: true }, (response) => {
           console.log(response);

          if (response.hasOwnProperty('assets')) {
            setPhoto(response.assets[0]);
            console.log(response)
          }
        });
      };
      const selectAudioHandle = async () => {
        //Opening Document Picker for selection of one file
        try {
          const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.audio],
          });
          console.log('res : ' + JSON.stringify(res));
          console.log('URI : ' + res[0].uri);
          console.log('Type : ' + res[0].type);
          console.log('File Name : ' + res[0].name);
          console.log('File Size : ' + res[0].size);
          //Setting the state to show single file attributes
          setAudio(res[0]);
          setAudioName(res[0].name)
        } catch (err) {
          //Handling any exception (If any)
          if (DocumentPicker.isCancel(err)) {
            alert('Canceled');
          } else {
            //For Unknown Error
            alert('Unknown Error: ' + JSON.stringify(err));
           
          }
        }
      };
  return (
    <View style={styles.container}>
     
 <View style={styles.LoginView}>
     <CardView
        style={styles.loginStyle}
          cardElevation={5}
          cardMaxElevation={10}
          cornerRadius={20}>
          <Text style={styles.heading}>
               New Collection
          </Text>
          <View style={styles.txtInput}>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
            layout="row"
          />
          </View>
          <TextInput placeholder='Description' style={styles.txtInput} onChangeText={(val)=>setDescription(val)}/>
          <View style={{...styles.txtInput,flexDirection:'row'}}>
            <View style={{flex:6,justifyContent:'center'}}>
                   <Text>{audioName}</Text>
            </View>
            <View style={{flex:4}}>
            <TouchableOpacity style={{...styles.btnLogin,width:118,marginTop:0}} onPress={selectAudioHandle}>
            <Text style={styles.txtLogin}>
                Choose Audio
            </Text>
          </TouchableOpacity>
           </View>
          </View>
          <View style={styles.ImageView}>
                    {photo!=null? (
                  
                        <Image
                            source={{ uri: photo.uri }}
                            style={styles.imagstyle}
                            resizeMode='cover'/>
                   
                    ):null}
              
                <TouchableOpacity style={styles.btnLogin} onPress={handleChoosePhoto}>
                <Text style={styles.txtLogin}>
                Choose Photo
                </Text>
                </TouchableOpacity>
                    
          </View>
         
        
         
          <TouchableOpacity style={styles.btnLogin} onPress={SaveCollection}>
          <Text style={styles.txtLogin}>
              Save Collection
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
  }
  ,
  LoginView:{
      flex:1,
      backgroundColor:'#F5CE9A'
  },heading:{
    color:'black',
    fontSize:30,
    fontWeight:"bold"
  },
  loginStyle:{
    width:'98%',
    height:'100%',
    marginHorizontal:'1%',
    marginVertical:'1%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white'
  },
  txtInput:{
    paddingLeft:8,
    height:40,
    width:'86%',
    marginHorizontal:'12%',
    borderRadius:20,
    borderColor:'gray',
    borderWidth:1,
    marginTop:'8%'
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
   
  } , 
  imagstyle:{
    width: '70%', 
    height: 180,
    borderRadius:10,
  },
  ImageView:{
    height:250,
    width:'86%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFB133',
    marginTop:'5%',
    borderRadius:10
}
});

export default newCollection;