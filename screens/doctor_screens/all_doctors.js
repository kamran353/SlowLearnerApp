import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import CardView from 'react-native-cardview'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const allDoctors = ({  navigation, route  }) => {
  const [doctors, setDoctors] = useState([]);
  const [CurrentUser, setUser] = useState();
  useEffect(() => {
    AsyncStorage.getItem('User')
    .then((value) => {
      const user = JSON.parse(value).result;
      console.log(value)
      setUser(user)
      GetApprovedDoctors()
    })
    .catch((error) => {
      console.log(error);
    });
    
  }, []);
  function GetApprovedDoctors() {
    axios.get(`${global.BaseUrl}GetApprovedDoctors`)
      .then((response) => {
        console.log(response.data);
        setDoctors(response.data)
      }).catch(err => console.log(err));
  }
  function ReferPatient(ToDoctorId) {
    const referPatient = {   
        PatientId : route.params.PatientId,
        FromDoctorId: CurrentUser.UserRole == "PA" ? CurrentUser.ReferenceUserId : CurrentUser.UserId,
        ToDoctorId: ToDoctorId
        }
     
      axios.post(`${global.BaseUrl}ReferPatientToDoctor`, referPatient)
        .then(response => {
          if (response.status == 200) {
            alert("Referred Successfully")
            //SetShown(false)
          }
        }).catch(error => alert("Network Error"));
   
  }
  return (
    <View style={styles.container}>
      {doctors.length > 0 ?
        <FlatList
          style={{ flex: 1 }}
          data={doctors}
          renderItem={({ item }) => (
            <CardView
              style={styles.listItem}
              cardElevation={5}
              cardMaxElevation={10}
              cornerRadius={8}>

              <View style={styles.imageView}>
                <Image source={require('../../images/doctor.jpg')} style={styles.imagstyle} resizeMode='contain' />

              </View>

              <View style={styles.infoView}>
                <Text style={styles.nameTxt}>{item.UserName}</Text>
                <Text style={styles.otherTxt}>{item.UserPhone}</Text>
                <Text style={styles.otherTxt}>{item.UserGender}</Text>
              </View>


              <View style={styles.buttonView}>

                <TouchableOpacity onPress={() => ReferPatient(item.UserId)}>
                  <Text style={styles.rejectTxt}>Refer To</Text>
                </TouchableOpacity>

              </View>

            </CardView>

          )}
        /> : <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Text style={styles.nameTxt}>No Record</Text>
        </View>
      }

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
    flex: 4,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  buttonView: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: '2%',
    flexDirection: 'row',
    paddingBottom: '2%'
  },
  imagstyle: {
    width: '75%',
    height: '90%',
    borderRadius: 1000,
    marginLeft: '10%'
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
  acceptTxt: {
    color: 'green',
    fontSize: 15,
  },
  rejectTxt: {
    color: 'red',
    fontSize: 15
  }

});

export default allDoctors;