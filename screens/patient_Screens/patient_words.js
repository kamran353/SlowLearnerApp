import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet,Text } from 'react-native';
import CardView from 'react-native-cardview'
import { TouchableOpacity } from 'react-native-gesture-handler';
const patient_words = ({ navigation,route }) => {
    const [index,setIndex]=useState(0);
    const[wrong,setWrong]=useState('')
    const[correct,setCorrect]=useState('')
    useEffect(() => {
        setMcq()
    }, []);
    function setMcq(){
        setIndex(route.params.position);
    }
    function setPosition(position){
        if(position>=0 && position<route.params.collection.length){
          setIndex(position);
        }
        setCorrect('')
        setWrong('')
    }
    function CheckAnswer(txt,option){
      if(route.params.collection[index].CollectiontText==txt){
        setCorrect(option)
        setWrong('')
      }else {
          setWrong(option)
          if(route.params.collection[index].CollectiontText==route.params.collection[index].OptionA){
              setCorrect("A")
          }
          else if(route.params.collection[index].CollectiontText==route.params.collection[index].OptionB){
            setCorrect("B")
          }
          else if(route.params.collection[index].CollectiontText==route.params.collection[index].OptionC){
            setCorrect("C")
          }
          else if(route.params.collection[index].CollectiontText==route.params.collection[index].OptionD){
            setCorrect("D")
          }
      }
    }
    return (
        <View style={styles.container}>
           
           <CardView
            style={styles.listItem}
            cornerRadius={10}>
           <View style={styles.imageView}>
                 <Image  source={{uri:`${global.BaseUrlForImages}${route.params.collection[index].CollectionImage}`}} style={styles.imagstyle} resizeMode='contain'/> 
           </View>
           <View style={styles.optionButtonView}>
                 <TouchableOpacity style={correct=="A"?{...styles.optionGreen}:wrong=="A"?{...styles.optionRed}:{...styles.optionButton}}  onPress={()=>CheckAnswer(route.params.collection[index].OptionA,"A")}>
                     <Text style={styles.nameTxt}>{route.params.collection[index].OptionA}</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={correct=="B"?{...styles.optionGreen}:wrong=="B"?{...styles.optionRed}:{...styles.optionButton}} onPress={()=>CheckAnswer(route.params.collection[index].OptionB,"B")}>
                     <Text style={styles.nameTxt}>{route.params.collection[index].OptionB}</Text>
                 </TouchableOpacity>
               
           </View> 
           
           <View style={styles.optionButtonView}>
                 <TouchableOpacity style={correct=="C"?{...styles.optionGreen}:wrong=="C"?{...styles.optionRed}:{...styles.optionButton}} onPress={()=>CheckAnswer(route.params.collection[index].OptionC,"C")}>
                     <Text style={styles.nameTxt}>{route.params.collection[index].OptionC}</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={correct=="D"?{...styles.optionGreen}:wrong=="D"?{...styles.optionRed}:{...styles.optionButton}} onPress={()=>CheckAnswer(route.params.collection[index].OptionD,"D")}>
                     <Text style={styles.nameTxt}>{route.params.collection[index].OptionD}</Text>
                 </TouchableOpacity>
               
           </View>

           <View style={styles.previousNextView}>
                 <TouchableOpacity style={styles.optionButton} onPress={()=>setPosition(index-1)}>
                     <Text style={styles.nameTxt}>{'<<<'}</Text>
                 </TouchableOpacity>
                 <Text>{index+1}/{route.params.collection.length}</Text>
                 <TouchableOpacity style={styles.optionButton} onPress={()=>setPosition(index+1)}>
                     <Text style={styles.nameTxt}>{'>>>'}</Text>
                 </TouchableOpacity>
               
           </View>
           </CardView>
                
            
        </View>
    );
};

// React Native Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '2%',
        paddingTop: '2%'
    },
    imagstyle: {
        width: '60%',
        height: '90%',
        borderRadius: 20,
        marginTop:5,
        
    },
    listItem: {
        flex: 9,
        marginTop: '1%',
        height: 100

    },
    nameTxt: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',

    },
    otherTxt: {
        color: 'gray',
        fontSize: 15,

    },
    imageView: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
      
    },optionButtonView:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection:'row',
        marginBottom:20
    },optionButton:{
        backgroundColor:'#FFB133',
        width:100,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },previousNextView:
    {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection:'row',
        marginHorizontal:20
    }
    ,optionRed:{
        backgroundColor:'red',
        width:100,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    }
    ,optionGreen:{
        backgroundColor:'green',
        width:100,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    }
});

export default patient_words;