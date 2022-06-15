import React from 'react';
import { Text } from 'react-native';

import styles from '../../../styles';

const Random = ({ min, max }) => {
  const delta = max - min + 1;
  const random = parseInt(Math.random() * delta) + min;
  return (
    <Text style={styles.bigText}>O valor aleatório é {random}</Text>
  )
}

export default Random;