import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import CardView from 'react-native-cardview'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SoundPlayer from 'react-native-sound';
const words = ({ navigation }) => {
  const [MyWords, SetWords] = useState([]);
  const [IsDeleted, SetDeleted] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem('User')
      .then((value) => {
        const user = JSON.parse(value).result;
        console.log(value)
        if (user.UserRole == "PA") {
          getMyWords(user.ReferenceUserId)
        }
        else {
          getMyWords(user.UserId)
        }
      })
      .catch((error) => {
        console.log(error);
      });

  }, [IsDeleted]);
  function getMyWords(doctorId) {
    axios.get(`${global.BaseUrl}GetMyCollection?Type=Word&&DoctorId=${doctorId}`).then((response) => {
      SetWords(response.data)
    }).catch(error => console.log(error));
  }
  function deleteFromDatabase(id) {
    alert(id)
    axios.get(`${global.BaseUrl}DeleteCollection?Id=${id}`).then((response) => {
      if (response.status == 200) {
        alert("Deleted Successfully")
        SetDeleted(!IsDeleted);
      }
    }).catch(error => console.log(error));
  }
  function playAudio(url) {
    console.log(`${global.BaseUrlForImages}${url}`)
    var sound1 = new SoundPlayer(`${global.BaseUrlForImages}${url}`, '',
      (error, SoundPlayer) => {
        if (error) {
          alert('error' + error.message);
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
      {MyWords.length > 0 ?
        <FlatList
          style={{ flex: 1, marginTop: 5 }}
          data={MyWords}
          renderItem={({ item }) => (
            <CardView
              style={styles.listItem}
              cardElevation={5}
              cardMaxElevation={10}
              cornerRadius={8}>
              <View style={styles.imageView}>
                <Image source={{ uri: `${global.BaseUrlForImages}${item.CollectionImage}` }} style={styles.imagstyle} resizeMode='contain' />

              </View>
              <View style={styles.infoView}>
                <Text style={styles.nameTxt}>{item.CollectionText}</Text>
              </View>
              <View style={styles.audioView}>
                <TouchableOpacity onPress={() => playAudio(item.CollectionAudio)}>
                  <Text style={styles.txtLogin}>
                    Play
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.navigate("UpdateCollection", { collection: item })}>
                  <Text style={styles.txtLogin}>
                    Edit
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => deleteFromDatabase(item.CollectionId)}>
                  <Text style={styles.txtLogin}>
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
        onPress={() => navigation.navigate('NewCollection')}
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
    alignItems: 'flex-start'
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
    fontSize: 15,
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
    borderRadius: 1000
    //backgroundColor:'black'
  }, btnLogin: {
    height: 40,
    width: 60,
    borderRadius: 20,
    borderColor: 'gray',
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtLogin: {
    color: '#FFB133',
    fontSize: 15,
    fontWeight: "bold"
  }
});

export default words;