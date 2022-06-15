import React, { useState } from 'react';
import { Text, Button, View } from 'react-native';
import styles from '../../../styles';

const Counter = () => {
  const [num, setNum] = useState(0);

  const inc = () => setNum(num+1)
  const dec = () => setNum(num-1)
  return (
    <>
      <Text style={styles.bigText}>{num}</Text>
      <View style={styles.row}>
        <Button title='-' onPress={dec} />
        <Button title='+' onPress={inc} />
      </View>
    </>
  )
}

export default Counter;