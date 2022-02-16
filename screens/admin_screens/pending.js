import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import CardView from 'react-native-cardview'
import axios from 'axios';
const Pending = ({ navigation }) => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    GetAllUnApproveDoctors()
  }, []);
  function GetAllUnApproveDoctors() {
    axios.get(`${global.BaseUrl}GetUnApprovedDoctors`).then((response) => {
      console.log(response.data);
      setDoctors(response.data)
    }).catch(err => console.log(err));
  }
  function ApproveUnApproveDoctor(UserId, b) {
    axios.get(`${global.BaseUrl}ApproveUnApproveUser?UserId=${UserId}&&b=${b}`)
      .then((response) => {
        console.log(response.data);
        if (b) {
          alert("Approved Successfully")
          GetAllRequests();
        }
      }).catch(err => console.log(err));
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
                <TouchableOpacity onPress={() => ApproveUnApproveDoctor(item.UserId, true)}>
                  <Text style={styles.acceptTxt}>Accept</Text>
                </TouchableOpacity>
              </View>
            </CardView>
          )}
        />
        : <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Text style={styles.nameTxt}>No Record</Text>
        </View>}
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
  }
  ,
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

export default Pending;