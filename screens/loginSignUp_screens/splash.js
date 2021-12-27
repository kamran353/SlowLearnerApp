import React, {  useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
const splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(function () {
      navigation.replace('Login')
    }, 3000);
  }, []);

  return (
    <View style={{flex:1}}>
      <View style={styles.ImageView}>
        <Image source={require('../../images/loginimage.jpg')} style={styles.imagstyle} resizeMode='contain' />
      </View>
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ImageView: {
    flex: 1,
    backgroundColor: '#F5CE9A',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagstyle: {
    width: '100%',
    height: 300,
    borderRadius: 100

  }

});

export default splash;