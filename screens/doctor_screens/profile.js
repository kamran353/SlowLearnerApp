import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import CardView from 'react-native-cardview'
import AsyncStorage from '@react-native-async-storage/async-storage';
const testing = ({ navigation }) => {
  const [actions, setActions] = useState([
    {
      actionName: "RegisterPa",
      actionText: "New Jr.Doctor"
    },
    {
      actionName: "Levels",
      actionText: "Levels"
    },
    {
      actionName: "Collections",
      actionText: "Collections"
    },
    {
      actionName: "AllTemplates",
      actionText: "Templates"
    },
    {
      actionName: "DocPatients",
      actionText: "Patients"
    },
    {
      actionName: "DocAttendants",
      actionText: "Attendants"
    },
    {
      actionName: "Login",
      actionText: "Logout"
    }
  ]);
  const [User, setUser] = useState({ UserName: '', UserPhone: '', UserGender: "" });
  useEffect(() => {
    AsyncStorage.getItem('User')
      .then((value) => {
        const user = JSON.parse(value).result;
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image source={require('../../images/doctor.jpg')} style={styles.imageStyle} resizeMode='contain' />
        <Text style={styles.nameTxt}>{User.UserName}</Text>
        <Text style={styles.otherTxt}>{User.UserPhone}</Text>
        <Text style={styles.otherTxt}>{User.UserGender}</Text>
      </View>
      <View style={styles.bottomView}>
        {actions.length > 0 ?
          <FlatList
            numColumns={2}
            style={{ flex: 1, marginTop: 5 }}
            data={actions}
            renderItem={({ item, index }) => (
              <CardView
                style={styles.listItem}
                cardElevation={5}
                cardMaxElevation={10}
                cornerRadius={8}>
                <View style={styles.imageView}>
                  <TouchableOpacity style={styles.touchableOpacityStyle} onPress={() => navigation.navigate(item.actionName)}>
                    <Text style={styles.actionText}>{item.actionText}</Text>
                  </TouchableOpacity>
                </View>
              </CardView>
            )}
          />
          : <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text style={styles.nameTxt}>No Record</Text>
          </View>}
      </View>

    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '2%',
    paddingTop: '2%',
    backgroundColor: '#F5CE9A'
  },
  imageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',

  },
  infoView: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
  ,
  imageStyle: {
    width: '35%', height: '45%',
    borderRadius: 1000
  }
  ,
  listItem: {
    flex: 3,
    flexDirection: 'row',
    marginTop: '1%',
    height: 100,
    justifyContent: 'center',
    marginHorizontal: 5,
    alignItems: 'center'
  },
  nameTxt: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  otherTxt: {
    color: 'white',
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
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  topView: {
    height: '35%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    height: '65%',
    backgroundColor: '#F5CE9A'
  },
  actionText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default testing;