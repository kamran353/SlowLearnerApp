import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import CardView from 'react-native-cardview'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const allTemplates = ({ navigation }) => {
  const [MyTemplates, setTemplates] = useState([]);
  const [IsDeleted, SetDeleted] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem('User')
      .then((value) => {
        const user = JSON.parse(value).result;
        console.log(value)
        if (user.UserRole == "PA") {
          getMyTemplates(user.ReferenceUserId)
        }
        else {
          getMyTemplates(user.UserId)
        }
      })
      .catch((error) => {
        console.log(error);
      });

  }, [IsDeleted]);
  function getMyTemplates(doctorId) {
    axios.get(`${global.BaseUrl}GetDoctorTemplates?DoctorId=${doctorId}`).then((response) => {
      setTemplates(response.data)
    }).catch(error => console.log(error));;
  }
  function deleteFromDatabase(id) {
    axios.get(`${global.BaseUrl}DeleteTemplate?Id=${id}`).then((response) => {
      if (response.status == 200) {
        alert("Deleted Successfully")
        SetDeleted(!IsDeleted);
      }
    }).catch(error => console.log(error));
  }
  function UseTemplate(item) {
    console.log(item)

    if (item.TemplateType == 1) {
      navigation.navigate('OneBlankTemplate', { Template: item });
    }
    else if (item.TemplateType == 2) {
      navigation.navigate('TwoBlankTemplate', { Template: item });
    }
  }
  return (
    <View style={styles.container}>
      {MyTemplates.length > 0 ?
        <FlatList
          style={{ flex: 1, marginTop: 5 }}
          data={MyTemplates}
          renderItem={({ item }) => (
            <CardView
              style={styles.listItem}
              cardElevation={5}
              cardMaxElevation={10}
              cornerRadius={8}>
              <View style={styles.infoView}>
                <Text style={styles.nameTxt}>{item.TemplateText}</Text>
              </View>
              <View style={styles.audioView}>
                <TouchableOpacity onPress={() => UseTemplate(item)}>
                  <Text style={styles.txtLogin}>
                    Use
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => deleteFromDatabase(item.TemplateId)}>
                  <Text style={styles.txtLogin}>
                    Delete
                  </Text>
                </TouchableOpacity>
              </View>
            </CardView>
          )}
        /> : <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Text style={styles.nameTxt}>No Record</Text>
        </View>}
      {//plusbutton code
      }
      <TouchableOpacity
        onPress={() => navigation.navigate('AddNewTemplate')}
        activeOpacity={1}
        style={styles.touchableOpacityStyle}>
        <Image
          source={require('../../images/plus-icon.jpg')}
          style={styles.floatingButtonStyle}
        />
      </TouchableOpacity>
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
  imageView: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',

  },
  infoView: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 12
  },
  audioView: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingBottom: 10
  }
  ,
  imagstyle: {
    width: '75%',
    height: '60%',
    borderRadius: 50,
    marginLeft: '10%',

  }
  ,
  listItem: {
    flex: 3,
    flexDirection: 'row',
    marginTop: '1%',
    height: 100

  },
  nameTxt: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',

  },
  otherTxt: {
    color: 'gray',
    fontSize: 15,

  },
  buttonView: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: '2%',
    flexDirection: 'row',
    paddingBottom: '2%',
    paddingEnd: 20
  },
  rejectTxt: {
    color: '#FFB133',
    fontSize: 15
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
    borderRadius: 1000,
  }, btnLogin: {
    height: 40,
    width: 100,
    borderRadius: 20,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFB133'
  },
  txtLogin: {
    color: '#FFB133',
    fontSize: 17,
    fontWeight: "bold"
  }
});


export default allTemplates;