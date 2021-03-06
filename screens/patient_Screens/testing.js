import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import CardView from 'react-native-cardview'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const testing = ({ navigation }) => {
  const [collections, setCollection] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem('User')
      .then((value) => {
        const user = JSON.parse(value).result;
        console.log(value)
        getMyTestCollections(user.UserId)
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);
  function getMyTestCollections(patientId) {
    axios.get(`${global.BaseUrl}GetTestCollections?PatientId=${patientId}`)
      .then((response) => {
        setCollection(response.data)
      }).catch(error => console.log(error));
  }
  return (
    <View style={styles.container}>
      {collections.length > 0 ?
        <FlatList
          numColumns={2}
          style={{ flex: 1, marginTop: 5 }}
          data={collections}
          renderItem={({ item, index }) => (
            <CardView
              style={styles.listItem}
              cardElevation={5}
              cardMaxElevation={10}
              cornerRadius={8}>
              <View style={styles.imageView}>
                <TouchableOpacity onPress={() => navigation.navigate("PatientWords", { collection: collections, position: index })} style={styles.imagstyle}>
                  <Image source={{ uri: `${global.BaseUrlForImages}${item.CollectionImage}` }} style={styles.imagstyle} resizeMode='contain' />
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
  imagstyle: {
    width: '95%',
    height: '80%',
    borderRadius: 50

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
  }
});

export default testing;