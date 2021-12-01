import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet,Text } from 'react-native';
import CardView from 'react-native-cardview'
import axios from 'axios';
import DropDownPicker from 'react-native-dropdown-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

const patient_words = ({ navigation }) => {
    const [levelOneWords, setLevelOneWords] = useState([]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Level 1', value: '1' },
        { label: 'Level 2', value: '2' },
        { label: 'Level 3', value: '3' }
    ]);
    useEffect(() => {
        getLevelOneWords()
    }, []);
    function getLevelOneWords() {
        axios.get(`${global.BaseUrl}GetLevelWords?WordLevel=1`).then((response) => {
            setLevelOneWords(response.data)
        });
    }
    return (
        <View style={styles.container}>
            {/* <View
                style={{ flex: 1 }}
                cardMaxElevation={10}
                cornerRadius={8}>
                <View style={{zIndex:1001}}>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        translation={{
                            PLACEHOLDER: "Select Level"
                        }}
                    />
                </View>
            </View> */}
           <CardView
            style={styles.listItem}
            cornerRadius={10}>
           <View style={styles.imageView}>
           <TouchableOpacity style={styles.preButton}>
                     <Text style={styles.nameTxt}>{'<<<'}</Text>
                 </TouchableOpacity>
             <Image source={require('../../images/laptop.png')} style={styles.imagstyle} resizeMode='contain' />              
           </View>
           <View style={styles.optionButtonView}>
                 <TouchableOpacity style={styles.optionButton}>
                     <Text style={styles.nameTxt}>Laptop</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.optionButton}>
                     <Text style={styles.nameTxt}>Mobile</Text>
                 </TouchableOpacity>
               
           </View> 
           
           <View style={styles.optionButtonView}>
                 <TouchableOpacity style={styles.optionButton}>
                     <Text style={styles.nameTxt}>Tablet</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.optionButton}>
                     <Text style={styles.nameTxt}>Keyboard</Text>
                 </TouchableOpacity>
               
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
        width: '80%',
        height: '100%',
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
        fontSize: 20,
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
});

export default patient_words;