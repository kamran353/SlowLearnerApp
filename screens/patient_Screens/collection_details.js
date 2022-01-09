import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import CardView from 'react-native-cardview'
import SoundPlayer from 'react-native-sound';
import { TouchableOpacity } from 'react-native-gesture-handler';


const collection_details = ({ navigation, route }) => {
    const [collectionLetter, setCollectLetters] = useState(['hel']);
    const Letters = [];
    useEffect(() => {
        var text = route.params.Collection.CollectionText
        for (var i = 0; i < text.length; i++) {
            Letters.push(text[i])
        }
        setCollectLetters(Letters)
        console.log(Letters)
    }, []);
    function playAudio(url) {
        console.log(`${global.BaseUrlForImages}${url}`)
        var sound1 = new SoundPlayer(`${global.BaseUrlForImages}${url}`, '',
          (error, SoundPlayer) => {
            if (error) {
              alert('error' + error.message);
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
                <View style={styles.imageView}>
                    <Image source={{ uri: `${global.BaseUrlForImages}${route.params.Collection.CollectionImage}` }} style={styles.imagstyle} resizeMode='contain' />
                    <TouchableOpacity style={{...styles.optionButton,width:50}} onPress={()=>playAudio(route.params.Collection.CollectionAudio)}>
                    <Image
                        source={require('../../images/speaker.png')}
                        style={{width:'100%',height:'100%',}}
                    />
                    </TouchableOpacity>
                </View>
                {route.params.Collection.CollectionType=="Word"?
                 <View style={styles.optionButtonView}>
                    {collectionLetter.map((element) => {
                        return (<TouchableOpacity style={styles.optionButton}>
                            <Text style={styles.nameTxt}>
                                {element}
                            </Text>
                        </TouchableOpacity>)
                    })}

                </View>:
                <View style={{justifyContent:'center',alignItems:'center',flex:1,width:'100%'}}>
                         <TouchableOpacity style={{borderRadius:30,padding:30,width:'100%', backgroundColor: '#FFB133',height:'70%',justifyContent:'center',alignItems:'center'}}>
                            <Text style={styles.nameTxt}>
                                {route.params.Collection.CollectionText}
                            </Text>
                        </TouchableOpacity>
                </View>
                }
                {/* <View style={styles.previousNextView}>
                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.nameTxt}>{'<<'}</Text>
                    </TouchableOpacity>
                    <Text>3/4</Text>
                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.nameTxt}>{'>>'}</Text>
                    </TouchableOpacity>

                </View> */}
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
        flex: 9,
        marginTop: '1%',
        width:'100%'
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }, optionButtonView: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    }, optionButton: {
        backgroundColor: '#FFB133',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }, previousNextView:
    {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20
    }
});

export default collection_details;