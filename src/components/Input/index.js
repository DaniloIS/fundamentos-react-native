import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles';

const Input = ({ label = '', value = '', setvalue = () => {}, type = 'default' }) => {
  return (
    <TextInput placeholder={label} value={value} onChangeText={setvalue} style={styles.input} keyboardType={type} />
  )
}

export { Input };