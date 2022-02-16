import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import CardView from 'react-native-cardview'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const assistent = ({ navigation }) => {
  const [MyAssistent, SetMyAssistent] = useState([]);
  const [IsDeleted, SetDeleted] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem('User')
      .then((value) => {
        const user = JSON.parse(value).result;
        console.log(value)
        getMyAssistents(user.UserId)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [IsDeleted]);
  function getMyAssistents(doctorId) {
    axios.get(`${global.BaseUrl}GetMyAssistents?DoctorId=${doctorId}`).then((response) => {
      console.log(response.data);
      SetMyAssistent(response.data)
    }).catch(error => console.log(error));
  }
  function deleteFromDatabase(id) {
    axios.get(`${global.BaseUrl}DeleteUser?Id=${id}`).then((response) => {
      if (response.status == 200) {
        alert("Deleted Successfully")
        SetDeleted(!IsDeleted);
      }
    }).catch(error => console.log(error));
  }
  return (
    <View style={styles.container}>
      {MyAssistent.length > 0 ?
        <FlatList
          style={{ flex: 1 }}
          data={MyAssistent}
          renderItem={({ item }) => (
            <CardView
              style={styles.listItem}
              cardElevation={5}
              cardMaxElevation={10}
              cornerRadius={8}>
              <View style={styles.imageView}>
                <Image source={require('../../images/pa.png')} style={styles.imagstyle} resizeMode='contain' />

              </View>
              <View style={styles.infoView}>
                <Text style={styles.nameTxt}>{item.UserName}</Text>
                <Text style={styles.otherTxt}>{item.UserPhone}</Text>
                <Text style={styles.otherTxt}>{item.UserGender}</Text>
              </View>
              <View style={styles.buttonView}>
                <TouchableOpacity onPress={() => deleteFromDatabase(item.UserId)}>
                  <Text style={styles.acceptTxt}>
                    Delete
                  </Text>
                </TouchableOpacity>
              </View>
            </CardView>

          )}
        />
        : <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Text style={styles.nameTxt}>No Record</Text>
        </View>}
      <TouchableOpacity
        onPress={() => navigation.navigate('RegisterPa', { Type: 'PA' })}
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
    flex: 7,
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
  ,
  imagstyle: {
    width: '75%',
    height: '90%',
    borderRadius: 1000,
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
    borderRadius: 1000
    //backgroundColor:'black'
  },
  buttonView: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: '2%',
    flexDirection: 'row',
    paddingBottom: '2%'
  },
  acceptTxt: {
    color: '#FFB133',
    fontSize: 17,
    fontWeight: 'bold'
  }
});

export default assistent;