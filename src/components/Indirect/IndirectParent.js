import React, { useState } from 'react';
import { Text } from 'react-native';

import IndirectChildren from './IndirectChildren';

import styles from '../../../styles';

const IndirectParent = () => {
  const [num, setNum] = useState(0)
  
  function displayValue(n) {
    setNum(n)
  }

  return (
    <>
      <Text style={styles.bigText}>{num}</Text>
      <IndirectChildren min={1} max={35} func={displayValue} />
    </>
  )
}

export default IndirectParent;