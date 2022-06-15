import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../../styles';

// import { Container } from './styles';

const MinMax = ({ min, max }) => {
  return (
    <Text style={styles.bigText}>
      O valor {max} é maior que o valor {min}!
    </Text>
  )
}

export default MinMax;