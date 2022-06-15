import React from 'react';
import { Text } from 'react-native';
import styles from '../../../styles';

// import { Container } from './styles';

const Title = ({ primary, secondary }) => {
  return (
    <>
      <Text style={styles.bigText}>{primary}</Text>
      <Text>{secondary}</Text>
    </>
  )
}

export default Title;