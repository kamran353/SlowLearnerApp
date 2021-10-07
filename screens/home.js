import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
const home = ({navigation}) => {
 

  return (
    <View style={styles.container}>
     
     
     <Image  source={require('../images/loginimage.jpg')} style={styles.imagstyle} resizeMode='stretch'/>
    

    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  
  imagstyle:{
    width: '100%', height: '100%'
  }
 
});

export default home;