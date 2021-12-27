import React, { useState,useEffect } from 'react';
import { View, Text, Image, StyleSheet ,TextInput,FlatList, Alert} from 'react-native';
import CardView from 'react-native-cardview'
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
const newPractice =({navigation,route}) => {
    const[Title,setTitle]=useState(null)

    const [IsLetterTabActive,SetLetterTabActive]=useState(true)
    const [IsWordTabActive,SetWordTabActive]=useState(false)
    const [IsSentenceTabActive,SetSentenceTabActive]=useState(false)
    
    const[User,SetUser]=useState(null)

    const[collectionIds,SetCollectionIds]=useState([])

    const [MyCollection,setMyCollection]=useState([]);

    useEffect(() => {
      AsyncStorage.getItem('User')
      .then((value) => {
        var user = JSON.parse(value).result;
        SetUser(user)
        var Type="Letter";
        if(IsWordTabActive){
          Type="Word"
        }
        if(IsSentenceTabActive){
          Type="Sentence"
        }
        GetMyCollection(Type,user.UserId)
      })
      .catch((error) => {
        console.log(error);
      });
    },[MyCollection,IsLetterTabActive]);


    function GetMyCollection(type,id){
      var DoctorId=id;
      if(id==0){
        DoctorId=User.UserId
      }
      axios.get(`${global.BaseUrl}GetMyCollection?Type=${type}&&DoctorId=${DoctorId}`).then((response) => {
        setMyCollection(response.data)
        });
    }



    function AddOrRemoveCollection(collectionId){
      var CollectionIndex;
      for(var i=0;i<MyCollection.length;i++){
       if(MyCollection[i].CollectionId==collectionId){
        CollectionIndex=i;
       }
      }
      var index=collectionIds.indexOf(collectionId);
      if(index>-1){
        collectionIds.splice(index,1)
        MyCollection[CollectionIndex].IsSelected=false;
      }else{
        collectionIds.push(collectionId)
        MyCollection[CollectionIndex].IsSelected=true;
      }
      SetCollectionIds(collectionIds)
      setMyCollection(MyCollection)
      console.log(collectionIds)
    }


    function SetSelectedTab(type){
      if(type=="Letter"){
        SetLetterTabActive(true)
        SetWordTabActive(false);
        SetSentenceTabActive(false);
      }
      else if(type=="Word"){
        SetWordTabActive(true)
        SetSentenceTabActive(false);
        SetLetterTabActive(false)
      }else{
        SetSentenceTabActive(true);
        SetLetterTabActive(false)
        SetWordTabActive(false);
      }
    }



    function SavePractice(){

      const practice = { 
        Title: Title,
        LevelNo:route.params.Level,
        CollectionIds:collectionIds.toString(),
        DoctorId:User.UserId
      };


      axios.post(`${global.BaseUrl}AddNewPractice`, practice)
          .then(response =>{
            if(response.status==200){
              alert("Save Successfully")
              
              SetCollectionIds([])
              setMyCollection([])
            }
          }).catch(error=>console.log(error));
    }
    
  return (
 <View style={styles.container}>
     
 <View style={styles.LoginView}>
     <CardView
        style={styles.loginStyle}
          cardElevation={5}
          cardMaxElevation={10}
          cornerRadius={20}>
          <Text style={styles.heading}>
              Add New Practice In Level {route.params.Level}
          </Text>
          
          <TextInput placeholder='Title' style={styles.txtInput} onChangeText={(val)=>setTitle(val)}/>
         
     <View style={styles.tabView}>
          <TouchableOpacity style={IsLetterTabActive?styles.activeTab:styles.btnTab} onPress={()=>SetSelectedTab('Letter')}>
          <Text style={styles.txtLogin}>
              Letters
          </Text>
          </TouchableOpacity>

          <TouchableOpacity style={IsWordTabActive?styles.activeTab:styles.btnTab} onPress={()=>SetSelectedTab('Word')}>
          <Text style={styles.txtLogin}>
              Words
          </Text>
          </TouchableOpacity>

          <TouchableOpacity style={IsSentenceTabActive?styles.activeTab:styles.btnTab} onPress={()=>SetSelectedTab('Sentence')}>
          <Text style={styles.txtLogin}>
              Sentences
          </Text>
          </TouchableOpacity>
          
        </View>
        
          <FlatList
            style={styles.txtInput}
            data={MyCollection}
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
            <CheckBox
              disabled={false}
              value={collectionIds.indexOf(item.CollectionId)>-1?true:false}
              onValueChange={(newValue) => AddOrRemoveCollection(item.CollectionId)}
            />
          
               
            </View>
        </CardView>
       
      )}
     />

          <TouchableOpacity style={styles.btnLogin} onPress={()=>SavePractice()}>
          <Text style={styles.txtLogin}>
              Save Practice
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
    fontSize:20,
    fontWeight:"bold",
    marginTop:'6%'
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
    paddingHorizontal:8,
    height:'8%',
    width:'86%',
    marginHorizontal:'12%',
    borderRadius:20,
    borderColor:'gray',
    borderWidth:1,
    marginTop:'4%'
  },tabView:{
    paddingLeft:1,
    height:'6%',
    width:'86%',
    marginHorizontal:'12%',
    borderRadius:20,
    borderColor:'gray',
    borderWidth:1,
    marginTop:'4%',
    flexDirection:'row',
    justifyContent:'space-around'
  },
  btnLogin:{
    height:'23%',
    width:200,
    borderRadius:20,
    borderColor:'gray',
    borderWidth:1,
    marginTop:'7%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFB133'
  },btnTab:{
    height:30,
    width:90,
    borderRadius:20,
    borderColor:'gray',
    borderWidth:1,
    marginTop:'5%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFB133'
  },
  activeTab:{
    height:30,
    width:90,
    borderRadius:20,
    borderColor:'gray',
    borderWidth:1,
    marginTop:'5%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'blue'
  },
  txtLogin:{
     color:'white',
    fontSize:15,
    fontWeight:"bold"
  } 
  , 
  imageView:{
    flex:3,
    justifyContent:'center',   
  },
  infoView:{
    flex:7,
    height:70,
    justifyContent:'center',
    alignItems:'flex-start'
  }
  ,
  imagstyle:{
    width: '75%', 
    height: '70%',
    borderRadius:100,
    marginLeft:'1%',
  }
  ,
  listItem:{
    flex:1,
    flexDirection:'row',
    marginTop:'1%',   
  },buttonView:{
    flex:3,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    paddingBottom:'2%',
    backgroundColor:'#FFB133'
  },
});

export default newPractice;