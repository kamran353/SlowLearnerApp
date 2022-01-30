import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import CardView from 'react-native-cardview'
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const radioButtonsData = [
    {
      id: '1',
      label: 'One Blank',
      value: '1',
      color: 'black',
      selected: true,
    },
    {
      id: '2',
      label: 'Two Blank',
      value: '2',
      color: 'black',
      selected: false,
    },
  ];
  
const newTemplate = ({navigation}) => {
  const [User, SetUser] = useState(null)
  const [TemplateText, SetTemplateText] = useState('');
  const [TemplateType, SetTemplateType] = useState('1');
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  useEffect(() => {
    AsyncStorage.getItem('User')
      .then((value) => {
        const user = JSON.parse(value).result;
        SetUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function SaveTemplate() {
    if(radioButtons[0].selected==false){
        SetTemplateType('2');
    }
      const template = {
      TemplateText: TemplateText,
      DoctorId:User.UserRole=="PA"? User.ReferenceUserId: User.UserId,
      TemplateType:TemplateType
    };
    axios.post(`${global.BaseUrl}AddNewTemplate`, template)
      .then(response => {
        if (response.status == 200) {
          alert("Template Created Successfully")
        }
      }).catch(error => console.log(error));
    
  }
  const onPressRadioButton = radioButtonsArray => {
    console.log(radioButtonsArray);
    setRadioButtons(radioButtonsArray);
  };
  return (
    <View style={styles.container}>
      <View style={styles.LoginView}>
        <CardView
          style={styles.loginStyle}
          cardElevation={10}
          cardMaxElevation={10}
          cornerRadius={20}>
          <Text style={styles.heading}>
              Add New Template
          </Text>
          <View style={styles.InputView}>
            <Text style={styles.InputViewLabel}>Template Text</Text>
            <TextInput placeholder='Tepmlate Text' style={styles.txtInput} onChangeText={(val) => SetTemplateText(val)} />
          </View>
          <View style={styles.InputView}>
          <Text style={styles.InputViewLabel}>Template Type</Text>
           <View style={styles.txtInput}>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
            layout="row"
          />
          </View>
         </View>

          <TouchableOpacity style={styles.btnLogin} onPress={() => SaveTemplate()}>
            <Text style={styles.txtLogin}>
              Save Template
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
  },
  LoginView: {
    flex: 1,
    backgroundColor: '#F5CE9A'
  },
  heading: {
    color: 'black',
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: '5%'
  },
  loginStyle: {
    width: '98%',
    height: '100%',
    marginHorizontal: '1%',
    marginVertical: '1%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }, InputView: {
    paddingLeft: 5,
    width: '106%',
    marginTop: '2%'
  },
  txtInput: {
    paddingLeft: 8,
    height: 40,
    width: '76%',
    marginHorizontal: '12%',
    borderRadius: 20,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: '2%'
  }, InputViewLabel: {
    marginLeft: '13%',
    color: 'black',
    fontWeight: 'bold'
  },
  txtDatePicker: {
    flexDirection: 'row',
    paddingLeft: 8,
    height: 40,
    width: '76%',
    marginHorizontal: '12%',
    borderRadius: 20,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: '5%'
  },
  btnLogin: {
    height: 40,
    width: 200,
    borderRadius: 20,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFB133'
  },
  txtLogin: {

    color: 'white',
    fontSize: 15,
    fontWeight: "bold"

  }, datePickerStyle: {
    width: 250,
    width: '100%',
    height: 20
  }
});

export default newTemplate;