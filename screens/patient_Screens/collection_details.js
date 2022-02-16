import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text ,TouchableOpacity} from 'react-native';
import CardView from 'react-native-cardview'
import SoundPlayer from 'react-native-sound';
const collection_details = ({ navigation, route }) => {
    const Letters = [];
    useEffect(() => {
        // var text = route.params.Collection.CollectionText
        // for (var i = 0; i < text.length; i++) {
        //     Letters.push(text[i])
        // }
        // setCollectLetters(Letters)
        // console.log(Letters)
    }, []);
    function playAudio(url) {
        console.log(`${global.BaseUrlForImages}${url}`)
        var sound1 = new SoundPlayer(`${global.BaseUrlForImages}${url}`, '',
          (error, SoundPlayer) => {
            if (error) {
              alert('Audio not Found');
              return;
            }
            if (sound1) sound1.stop();
            sound1.play(() => {
              sound1.release();
            });
          });
      }
    return (
        <View style={styles.container}>

            <CardView
                style={styles.listItem}
                cornerRadius={10}>
                <View style={{flex:4,justifyContent:'center',alignItems:'center'}}>
                <Image source={{ uri: `${global.BaseUrlForImages}${route.params.Collection.CollectionImage}` }} 
                                                                  style={styles.imagstyle} resizeMode='contain' />
                </View>
                <View style={{flex:6,justifyContent:'flex-start',alignItems:'center'}}>
                    <TouchableOpacity style={{...styles.soundButton,width:50}}
                     onPress={()=>playAudio(route.params.Collection.CollectionAudio)}>
                    <Image
                        source={require('../../images/speaker.png')}
                        style={{width:'100%',height:'100%',}}
                    />
                    </TouchableOpacity>
                    <Text style={styles.nameTxt}>
                            {route.params.Collection.CollectionText}
                      </Text>
                </View>
               
                <View style={styles.textView}>
                    
                     
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
        marginTop: 5,
    },
    listItem: {
        flex: 1,
        width:'100%'
    },
    nameTxt: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing:4,
        marginTop:20
    },
    otherTxt: {
        color: 'gray',
        fontSize: 15,
    },
    imageView: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    soundButton: {
        backgroundColor: '#FFB133',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textView:{
        justifyContent:'center',
        alignItems:'center',
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        flex:5,width:'100%',
    }
});

export default collection_details;