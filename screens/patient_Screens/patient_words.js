import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import CardView from 'react-native-cardview'
import axios from 'axios';
import SoundPlayer from 'react-native-sound';
const patient_words = ({ navigation, route }) => {
    const [index, setIndex] = useState(0);
    const [wrong, setWrong] = useState('')
    const [correct, setCorrect] = useState('')
    useEffect(() => {
        setMcq()
    }, []);
    function setMcq() {
        setPosition(route.params.position);
    }
    function setPosition(position) {
        if (position >= 0 && position < route.params.collection.length) {
            setIndex(position);
            setCorrect('')
            setWrong('')
            //   if(route.params.collection[index].IsAttempted==false)
            //   {
            //       setCorrect('')
            //       setWrong('')
            //   }
            //   else
            //   {
            //     var option=""; 
            //     if(route.params.collection[index].PatientSelectedText==route.params.collection[index].OptionA){
            //         option="A";
            //     }
            //     else if(route.params.collection[index].PatientSelectedText==route.params.collection[index].OptionB){
            //         option="B";
            //     } else if(route.params.collection[index].PatientSelectedText==route.params.collection[index].OptionC){
            //         option="C";
            //     } else if(route.params.collection[index].PatientSelectedText==route.params.collection[index].OptionD){
            //         option="D";
            //     }
            //     if(route.params.collection[index].IsRight==true){
            //         setWrong('')
            //         setCorrect(option)
            //     }else{
            //         setWrong(option)
            //         setCorrect('')
            //     }
            //   }
        }

    }
    function CheckAnswer(txt, option) {
        //if(route.params.collection[index].IsAttempted==false)
        {
            if (route.params.collection[index].CollectiontText == txt) {
                setCorrect(option)
                setWrong('')
                saveAnswerInDatabase(true, route.params.collection[index].AnsId, txt)
            }
            else {
                setWrong(option)
                if (route.params.collection[index].CollectiontText == route.params.collection[index].OptionA) {
                    setCorrect("A")
                }
                else if (route.params.collection[index].CollectiontText == route.params.collection[index].OptionB) {
                    setCorrect("B")
                }
                else if (route.params.collection[index].CollectiontText == route.params.collection[index].OptionC) {
                    setCorrect("C")
                }
                else if (route.params.collection[index].CollectiontText == route.params.collection[index].OptionD) {
                    setCorrect("D")
                }
                saveAnswerInDatabase(false, route.params.collection[index].AnsId, txt)
            }
            route.params.collection[index].IsAttempted = true;
        }

    }
    function saveAnswerInDatabase(isRight, ansId, txt) {
        axios.get(`${global.BaseUrl}SaveAppointmentPracticeCollectionAns?AnsId=${ansId}&IsRight=${isRight}&PatientSelectedText=${txt}`)
            .then((response) => {
                console.log(response.data)
            }).catch(error => console.log(error));
    }
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
                <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={{ uri: `${global.BaseUrlForImages}${route.params.collection[index].CollectionImage}` }} style={styles.imagstyle} resizeMode='contain' />
                    <TouchableOpacity style={{ ...styles.optionButton, width: 50, marginTop: 10 }} onPress={() => playAudio(route.params.collection[index].CollectionAudio)}>
                        <Image
                            source={require('../../images/speaker.png')}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 5, justifyContent: 'space-around', alignItems: 'center', width: '100%' }}>
                    <TouchableOpacity style={correct == "A" ? { ...styles.optionGreen } : wrong == "A" ? { ...styles.optionRed } : { ...styles.optionButton }} onPress={() => CheckAnswer(route.params.collection[index].OptionA, "A")}>
                        <Text style={styles.nameTxt}>{route.params.collection[index].OptionA}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={correct == "B" ? { ...styles.optionGreen } : wrong == "B" ? { ...styles.optionRed } : { ...styles.optionButton }} onPress={() => CheckAnswer(route.params.collection[index].OptionB, "B")}>
                        <Text style={styles.nameTxt}>{route.params.collection[index].OptionB}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={correct == "C" ? { ...styles.optionGreen } : wrong == "C" ? { ...styles.optionRed } : { ...styles.optionButton }} onPress={() => CheckAnswer(route.params.collection[index].OptionC, "C")}>
                        <Text style={styles.nameTxt}>{route.params.collection[index].OptionC}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={correct == "D" ? { ...styles.optionGreen } : wrong == "D" ? { ...styles.optionRed } : { ...styles.optionButton }} onPress={() => CheckAnswer(route.params.collection[index].OptionD, "D")}>
                        <Text style={styles.nameTxt}>{route.params.collection[index].OptionD}</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ ...styles.previousNextView, flex: 2 }}>
                    <TouchableOpacity style={{ ...styles.prevNextButton, width: '20%' }} onPress={() => setPosition(index - 1)}>
                        <Text style={styles.nameTxt}>{'<<'}</Text>
                    </TouchableOpacity>
                    <Text>{index + 1}/{route.params.collection.length}</Text>
                    <TouchableOpacity style={{ ...styles.prevNextButton, width: '20%' }} onPress={() => setPosition(index + 1)}>
                        <Text style={styles.nameTxt}>{'>>'}</Text>
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
        height: '60%',
        borderRadius: 20,
        marginTop: 5,

    },
    listItem: {
        flex: 1,
        marginTop: '1%',
        height: 100

    },
    nameTxt: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: 1
    },
    otherTxt: {
        color: 'gray',
        fontSize: 15,
    }
    , optionButton: {
        backgroundColor: '#FFB133',
        width: '90%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    prevNextButton: {
        backgroundColor: '#FFB133',
        width: '20%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    previousNextView:
    {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 40
    }
    , optionRed: {
        backgroundColor: 'red',
        width: '90%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
    , optionGreen: {
        backgroundColor: 'green',
        width: '90%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
});

export default patient_words;