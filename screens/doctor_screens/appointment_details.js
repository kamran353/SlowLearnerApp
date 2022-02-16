import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import CardView from 'react-native-cardview'
import axios from 'axios';
import Modal from 'react-native-modal'
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
import DateTimePicker from '@react-native-community/datetimepicker';
import RadioGroup from 'react-native-radio-buttons-group';
const radioButtonsData = [
  {
    id: '1',
    label: 'Level 1',
    value: '1',
    color: 'black',
    selected: true,
  },
  {
    id: '2',
    label: 'Level 2',
    value: '2',
    color: 'black',
    selected: false,
  },
  {
    id: '3',
    label: 'Level 3',
    value: '3',
    color: 'black',
    selected: false,
  },
];
const appointment_details = ({ navigation, route }) => {
  const [User, setUser] = useState()
  const [levelPractices, setLevelPractices] = useState([]);
  const [Remarks, setRemarks] = useState(null)
  const [VisitNo, setVisitNo] = useState()
  const [PracticeIds, SetPracticeIds] = useState([])
  const [AddOrRemove, SetAddOrRemove] = useState(true)
  const [IsShown, SetShown] = useState(false)
  const [date, setDate] = useState(new Date());
  const [isDatePickerShow, setDatePickerShow] = useState(false);
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const [LastAppointment, SetLastAppointment] = useState(null)
  const [LastAppPracticeIds, SetLastAppPracticeIds] = useState([])
  useEffect(() => {
    /// getCurrentDate()
    AsyncStorage.getItem('User')
      .then((value) => {
        const user = JSON.parse(value).result;
        console.log(value)
        setUser(user)
        getMyLevelPracticesAndLastAppointmentOfPatient(user.UserId)
      })
      .catch((error) => {
        console.log(error);
      });

  }, [PracticeIds, AddOrRemove]);
  function getMyLevelPracticesAndLastAppointmentOfPatient(doctorId) {
    axios.get(`${global.BaseUrl}GetMyLevelPracticesAndLastAppointmentOfPatient?PracticeLevel=${route.params.LevelNo}&&DoctorId=${doctorId}&PatientId=${route.params.PatientId}`).then((response) => {
      console.log(response.data)
      setLevelPractices(response.data.Practices)
      SetLastAppointment(response.data.LastAppointment)
      setVisitNo(response.data.VisitNo)
      SetLastAppPracticeIds(response.data.PreviousPracticeIds)
    }).catch(error => console.log(error + " not found " + route.params.AppId))
  }
  const getCurrentDate = () => {

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    setDate(date + '-' + month + '-' + year);//format: dd-mm-yyyy;
  }
  function AddOrRemovePractice(practiceId) {
    var index = PracticeIds.indexOf(practiceId);
    if (index > -1) {
      PracticeIds.splice(index, 1)
    } else {
      PracticeIds.push(practiceId)
    }
    SetPracticeIds(PracticeIds)
    SetAddOrRemove(!AddOrRemove)
    console.log(PracticeIds)
  }
  function SaveAppointment(isRepeat) {
    if (PracticeIds.length < 1 && isRepeat==false) {
      alert("Please Select At least one Exercise")
    }
    else {
      const app = {
        Remarks: Remarks,
        PracticeIds:isRepeat==false?PracticeIds.toString():LastAppPracticeIds.toString(),
        AppId: route.params.AppId
      };
      axios.post(`${global.BaseUrl}SetAppointmentPractices`, app)
        .then(response => {
          if (response.status == 200) {
            if(isRepeat){
              alert("Repeated Successfully")
            }
            else{ alert("Saved Successfully")}
            SetPracticeIds([])
            SetAddOrRemove(true)
            //navigation.navigate("DoctorTab");
          }
        }).catch(error => console.log(error));
    }

  }
  const GetRadioButtonValue = async () => {
    for (var i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].selected == true) {
        return radioButtons[i].value
      }
    }
  }
  const onPressRadioButton = async (radioButtonsArray) => {
    console.log(radioButtonsArray);
    setRadioButtons(radioButtonsArray);

  };

  const SetAppointment = async () => {
    var Level = await GetRadioButtonValue();
    console.log("date is " + date)
    const Appointment = {
      AppDate: date,
      DoctorId: User.UserId,
      PatientId: route.params.PatientId,
      Remarks: '',
      IsActive: false, IsComplete: false, LevelNo: Level
    };
    axios.post(`${global.BaseUrl}SetNewAppointment`, Appointment)
      .then(response => {
        if (response.status == 200) {
          alert("Appointment set Successfully")
          
          //SetShown(false)
        }
      })
      .catch(error => alert("Network Error"));

  }
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setDatePickerShow(false);
  };
  return (
    <View style={styles.container}>

      <CardView
        cardElevation={10}
        cardMaxElevation={20}
        cornerRadius={10}
        style={styles.LastAppointment}>
        {LastAppointment != null ?
          <View style={styles.DetailView}>
            <Text style={styles.DetailTxt}>Date: {LastAppointment.AppDate.toString().split('T')[0]}</Text>
            <Text style={styles.DetailTxt}>Level: Level No {LastAppointment.LevelNo}</Text>
            <Text style={styles.DetailTxt}>Remarks:{LastAppointment.Remarks}</Text>

          </View>
          : null
        }
        <View style={styles.buttonHistoryView}>
       {/* {LastAppointment != null ? <TouchableOpacity style={styles.btnHistory} onPress={() => SaveAppointment(true)}>
            <Text style={styles.btnHistoryTxt}>Repeat</Text>
          </TouchableOpacity>:null
        } */}
          <Text style={styles.DetailTxt}>VisitNo:{VisitNo == 0 ? 1 : VisitNo}</Text>
          <TouchableOpacity style={styles.btnHistory} onPress={() => navigation.navigate("PatientVisit", { PatientId: route.params.PatientId })}>
            <Text style={styles.btnHistoryTxt}>History</Text>
          </TouchableOpacity>

        </View>

      </CardView>
      <View style={{ flex: 4 }}>
        {levelPractices.length > 0 ?
          <FlatList
            style={styles.FlatListStyle}
            data={levelPractices}
            renderItem={({ item }) => (
              <CardView
                style={styles.listItem}
                cardElevation={5}
                cardMaxElevation={10}
                cornerRadius={8}>
                <View style={styles.imageView}>
                  <Image source={require('../../images/practice.jpg')} style={styles.imagstyle} resizeMode='contain' />

                </View>
                <View style={styles.infoView}>
                  <Text style={styles.nameTxt}>{item.PracticeTitle}</Text>
                </View>
                <View style={styles.buttonView}>
                  <CheckBox
                    disabled={false}
                    value={PracticeIds.indexOf(item.PracticeId) > -1 ? true : false}
                    onValueChange={(newValue) => AddOrRemovePractice(item.PracticeId)}
                  />
                </View>
              </CardView>

            )}
          />
          : <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text style={styles.nameTxt}>No Exercises</Text>
          </View>
        }
      </View>

      <View style={{ flex: 3, justifyContent: 'flex-start', paddingTop: 5, alignItems: 'center', width: '100%' }}>
        <TextInput placeholder='Enter Remarks' style={styles.txtInput} onChangeText={(val) => setRemarks(val)} />

        <TouchableOpacity style={styles.btnLogin} onPress={() => SaveAppointment(false)}>
          <Text style={styles.txtLogin}>
            Save Changes
          </Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.btnLogin} onPress={() => SetShown(true)}>
          <Text style={styles.txtLogin}>Next Visit</Text>
        </TouchableOpacity>


      </View>

      <Modal isVisible={IsShown}>
        <View style={{ height: '50%', backgroundColor: 'white', width: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
          <View style={styles.txtDatePicker}>
            <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center', paddingLeft: 5 }}>
              <Text>{date.toString()}</Text>
            </View>
            <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => setDatePickerShow(true)}>
                <Text style={{ color: '#FFB133' }}>Choose Date</Text>
              </TouchableOpacity>
              {isDatePickerShow === true ?
                <DateTimePicker
                  value={date}
                  onChange={onChange}
                /> : null
              }
            </View>
          </View>
          <View style={{ ...styles.txtInput, marginTop: 20, justifyContent: 'center', width: '95%' }}>
            <RadioGroup
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
              layout="row"
            />
          </View>
          <TouchableOpacity style={styles.btnLogin} onPress={() => SetAppointment()}>
            <Text style={{ color: 'white' }}>
              Set Appointment
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnLogin} onPress={() => SetShown(false)}>
            <Text style={{ color: 'white' }}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
  ,
  loginStyle: {
    width: '98%',
    flex: 1,
    marginHorizontal: '1%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingTop: '5%'
  },
  LastAppointment: {
    flex: 2,
    width: '100%',
    padding: 10,
    alignSelf: 'center',
    backgroundColor: '#FFB133',
  },
  acceptTxt: {
    color: '#FFB133',
    fontSize: 15
  },
  FlatListStyle: {
    paddingHorizontal: 10,
    flex: 1,
    width: '100%',
    marginTop: '1%'
  },
  txtInput: {
    paddingHorizontal: 8,
    height: 50,
    width: '86%',
    marginHorizontal: '12%',
    borderRadius: 8,
    borderColor: 'gray',
    borderWidth: 1,
  },
  acceptTxt: {
    color: 'white',
    fontSize: 15
  },
  btnLogin: {
    height: 45,
    width: 230,
    borderRadius: 20,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 12,
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
  imagstyle: {
    width: '75%',
    height: '70%',
    borderRadius: 10,
    marginLeft: '2%',
  }
  ,
  listItem: {
    flex: 1,
    flexDirection: 'row',
    marginTop: '1%',
  },
  buttonView: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: '2%',
    backgroundColor: '#FFB133'
  },
  DetailTxt: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  btnHistoryTxt: {
    color: '#FFB133',
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttonHistoryView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  DetailView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  btnHistory: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 100,
    height: 40,
    borderRadius: 10
  },
  datePickerStyle: {
    width: '100%',
    height: 20
  },
  txtDatePicker: {
    flexDirection: 'row',
    paddingLeft: 8,
    height: 40,
    width: '96%',
    marginHorizontal: '12%',
    borderRadius: 20,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: '5%'
  },
});

export default appointment_details;