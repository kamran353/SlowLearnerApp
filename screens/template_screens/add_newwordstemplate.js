import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import CardView from 'react-native-cardview'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Picker } from '@react-native-community/picker'

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

const newTemplate = ({ navigation }) => {
  const [WordsCategory, setWordsCategory] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [secondCategoryId, setSecondCategoryId] = useState(0);
  const [User, SetUser] = useState(null)
  const [TemplateText, SetTemplateText] = useState('');
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  useEffect(() => {
    AsyncStorage.getItem('User')
      .then((value) => {
        const user = JSON.parse(value).result;
        SetUser(user);
        if (user.UserRole == "PA") {
          GetWordsCategory(user.UserReferenceId);
        }
        else {
          GetWordsCategory(user.UserId);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  function GetWordsCategory(doctorId) {
    axios.get(`${global.BaseUrl}GetWordsCategory?DoctorId=${doctorId}`)
      .then((response) => {
        setWordsCategory(response.data)
        setCategoryId(response.data[0].CategoryId)
        setSecondCategoryId(response.data[0].CategoryId)
      }).catch(error => console.log(error));
  }


  function SaveTemplate() {
    if (TemplateText.length < 1) {
      alert("Please Enter Title")
    }
    else {
      const template = {
        Cname: TemplateText,
        DoctorId: User.UserRole == "PA" ? User.ReferenceUserId : User.UserId,
      };
      axios.post(`${global.BaseUrl}SaveCategory`, template)
        .then(response => {
          if (response.status == 200) {
            alert("Category Created Successfully")
          }
        }).catch(error => console.log(error));
    }
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
            Add New Category
          </Text>
          <View style={styles.InputView}>
            <Text style={styles.InputViewLabel}>Category Title</Text>
            <TextInput placeholder='Category Title' style={styles.txtInput} onChangeText={(val) => SetTemplateText(val)} />
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
    marginTop: '10%'
  },
  txtInput: {
    paddingLeft: 8,
    height: 40,
    width: '76%',
    marginHorizontal: '12%',
    borderRadius: 8,
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
    width: '80%',
    borderRadius: 8,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: '10%',
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