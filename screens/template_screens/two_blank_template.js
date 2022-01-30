import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, FlatList, Alert } from 'react-native';
import CardView from 'react-native-cardview'
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
const newTemplate = ({ navigation, route }) => {
  const [Title, setTitle] = useState(null)
  const [User, SetUser] = useState(null)
  const [FirstCollectionIds, SetFirstCollectionIds] = useState([])
  const [SecondCollectionIds, SetSecondCollectionIds] = useState([])
  const [MyCollection, setMyCollection] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('User')
      .then((value) => {
        var user = JSON.parse(value).result;
        SetUser(user)

        if (user.UserRole == "PA") {

          GetMyCollection(user.ReferenceUserId)
        }
        else {
          GetMyCollection(user.UserId)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [MyCollection]);


  function GetMyCollection(id) {
    var DoctorId = id;
    if (id == 0) {
      DoctorId = User.UserId
    }
    axios.get(`${global.BaseUrl}GetMyCollection?Type=Word&&DoctorId=${DoctorId}`).then((response) => {
      setMyCollection(response.data)
    }).catch(error => console.log(error));
  }
  function AddOrRemoveFirstCollection(collectionId) {
    var CollectionIndex;
    for (var i = 0; i < MyCollection.length; i++) {
      if (MyCollection[i].CollectionId == collectionId) {
        CollectionIndex = i;
      }
    }
    var index = FirstCollectionIds.indexOf(collectionId);
    if (index > -1) {
      FirstCollectionIds.splice(index, 1)
      MyCollection[CollectionIndex].IsSelected = false;
    } else {
      FirstCollectionIds.push(collectionId)
      MyCollection[CollectionIndex].IsSelected = true;
    }
    SetFirstCollectionIds(FirstCollectionIds)
    setMyCollection(MyCollection)
    console.log(FirstCollectionIds)
  }
  function AddOrRemoveSecondCollection(collectionId) {
    var CollectionIndex;
    for (var i = 0; i < MyCollection.length; i++) {
      if (MyCollection[i].CollectionId == collectionId) {
        CollectionIndex = i;
      }
    }
    var index = SecondCollectionIds.indexOf(collectionId);
    if (index > -1) {
      SecondCollectionIds.splice(index, 1)
      MyCollection[CollectionIndex].IsSelected = false;
    } else {
      SecondCollectionIds.push(collectionId)
      MyCollection[CollectionIndex].IsSelected = true;
    }
    SetSecondCollectionIds(SecondCollectionIds)
    setMyCollection(MyCollection)
    console.log(SecondCollectionIds)
  }
  function SaveTemplate() {

    const template = {
      Sentence: route.params.Template.TemplateText,
      FirstBlankCollectionIds: FirstCollectionIds.toString(),
      SecondBlankCollectionIds: SecondCollectionIds.toString(),
      DoctorId: User.UserRole == "PA" ? User.ReferenceUserId : User.UserId
    };
    console.log(template)
    axios.post(`${global.BaseUrl}SaveTwoBlankTemplate`, template)
      .then(response => {
        if (response.status == 200) {
          alert("Save Successfully")
          SetFirstCollectionIds([])
          SetSecondCollectionIds([])
          setMyCollection([])
        }
      }).catch(error => console.log(error));
  }
  return (
    <View style={styles.container}>
      <CardView
        style={styles.loginStyle}
        cardElevation={5}
        cardMaxElevation={10}
        cornerRadius={20}>
       
        <View style={{ flex: 9, width: '90%' }}>

          <Text style={styles.txtLabel}>For 1st Blank</Text>

          {MyCollection.length > 0 ?
            <FlatList
              style={{ flex: 5 }}
              data={MyCollection}
              renderItem={({ item }) => (
                <CardView
                  style={styles.listItem}
                  cardElevation={5}
                  cardMaxElevation={10}
                  cornerRadius={8}>
                  <View style={styles.imageView}>
                    <Image source={{ uri: `${global.BaseUrlForImages}${item.CollectionImage}` }} style={styles.imageStyle} resizeMode='contain' />

                  </View>
                  <View style={styles.infoView}>
                    <Text style={styles.nameTxt}>{item.CollectionText}</Text>
                  </View>
                  <View style={styles.buttonView}>
                    <CheckBox
                      disabled={false}
                      value={FirstCollectionIds.indexOf(item.CollectionId) > -1 ? true : false}
                      onValueChange={(newValue) => AddOrRemoveFirstCollection(item.CollectionId)}
                    />
                  </View>
                </CardView>
              )}
            /> : <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
              <Text style={styles.nameTxt}>No Record</Text>
            </View>}
          <Text style={styles.txtLabel}>For 2nd Blank</Text>
          {
            MyCollection.length > 0 ?
              <FlatList
                style={{ flex: 5 }}
                data={MyCollection}
                renderItem={({ item }) => (
                  <CardView
                    style={styles.listItem}
                    cardElevation={5}
                    cardMaxElevation={10}
                    cornerRadius={8}>
                    <View style={styles.imageView}>
                      <Image source={{ uri: `${global.BaseUrlForImages}${item.CollectionImage}` }} style={styles.imageStyle} resizeMode='contain' />

                    </View>
                    <View style={styles.infoView}>
                      <Text style={styles.nameTxt}>{item.CollectionText}</Text>
                    </View>
                    <View style={styles.buttonView}>
                      <CheckBox
                        disabled={false}
                        value={SecondCollectionIds.indexOf(item.CollectionId) > -1 ? true : false}
                        onValueChange={(newValue) => AddOrRemoveSecondCollection(item.CollectionId)}
                      />
                    </View>
                  </CardView>
                )}
              /> : <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text style={styles.nameTxt}>No Record</Text>
              </View>}
        </View>

        <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity style={styles.btnLogin} onPress={() => SaveTemplate()}>
            <Text style={styles.txtLogin}>
              Save Template
            </Text>
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
    backgroundColor: '#F5CE9A',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginStyle: {
    width: '98%',
    flex: 1,
    marginHorizontal: '1%',
    marginVertical: '1%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  txtInput: {
    paddingHorizontal: 8,
    width: '86%',
    marginHorizontal: '6%',
    borderRadius: 20,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: '4%'
  },
  btnLogin: {
    height: '65%',
    width: 200,
    borderRadius: 20,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: '3%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFB133'
  },
  txtLogin: {
    color: 'white',
    fontSize: 15,
    fontWeight: "bold"
  }
  ,
  imageView: {
    flex: 3,
    justifyContent: 'center',
  },
  infoView: {
    flex: 7,
    height: 70,
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
  ,
  imageStyle: {
    width: '75%',
    height: '70%',
    borderRadius: 100,
    marginLeft: '1%',
  }
  ,
  listItem: {
    flex: 1,
    flexDirection: 'row',
    marginTop: '1%',
  }, buttonView: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: '2%',
    backgroundColor: '#FFB133'
  },
  txtLabel: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: "3%",
  }
});

export default newTemplate;