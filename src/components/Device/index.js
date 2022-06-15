import React from 'react';
import { Platform, Text } from 'react-native';
import styles from '../../../styles';

const Device = () => {
  if(Platform.OS === 'android') {
    return <Text style={styles.bigText}>Android</Text>
  } else if(Platform.OS === 'ios') {
    return <Text style={styles.bigText}>iOS</Text> 
  } else {
    return <Text style={styles.bigText}>Eita!!!</Text>
  }
}

export { Device };