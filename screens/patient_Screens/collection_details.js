import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import CardView from 'react-native-cardview'
import axios from 'axios';
import DropDownPicker from 'react-native-dropdown-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import letters from '../collection_Screens/letters';

const collection_details = ({ navigation, route }) => {
    const [collectionLetter, setCollectLetters] = useState(['hel']);
    const Letters = [];
    useEffect(() => {
        var text = route.params.CollectionText
        for (var i = 0; i < text.length; i++) {
            Letters.push(text[i])
        }
        setCollectLetters(Letters)
        console.log(Letters)
    }, []);

    return (
        <View style={styles.container}>

            <CardView
                style={styles.listItem}
                cornerRadius={10}>
                <View style={styles.imageView}>
                    <Image source={{ uri: `${global.BaseUrlForImages}${route.params.CollectionImage}` }} style={styles.imagstyle} resizeMode='contain' />
                </View>
                <View style={{ ...styles.optionButtonView }}>
                    {collectionLetter.map((element) => {
                        return (<TouchableOpacity style={styles.optionButton}>
                            <Text style={styles.nameTxt}>
                                {element}
                            </Text>
                        </TouchableOpacity>)
                    })}

                </View>
                <View style={styles.previousNextView}>
                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.nameTxt}>{'<<<'}</Text>
                    </TouchableOpacity>
                    <Text>3/4</Text>
                    <TouchableOpacity style={styles.optionButton}>
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
        marginTop: 5,

    },
    listItem: {
        flex: 8,
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