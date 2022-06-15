import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../../../styles';

// import { Container } from './styles';

const Display = ({ num }) => {
  return (
    <View>
      <Text style={styles.bigText}>{num}</Text>
    </View>
  )
}

export default Display;