import React from 'react';
import { Pressable, Text } from 'react-native';

import styles from './styles';

const PrimaryButton = ({ label = 'Executar', onclick = () => {} }) => {

  return (
    <Pressable
      style={styles.btn}
      onPress={onclick}
    >
      <Text style={styles.btnText}>{label}</Text>
    </Pressable>
  )
}

export { PrimaryButton };