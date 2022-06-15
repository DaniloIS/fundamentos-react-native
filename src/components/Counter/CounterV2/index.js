import React, { useState } from 'react';
import { Text, View } from 'react-native';

import Display from './Display';

import styles from '../../../../styles';
import { PrimaryButton } from '../../Button';

const CounterV2 = () => {
  const [num, setNum] = useState(0)

  const inc = () =>  setNum(num + 1)
  const dec = () =>  setNum(num - 1)

  return (
    <>
      <Text style={styles.bigText}>
        Contador
      </Text>
      <Display num={num} />
      <View style={styles.row}>
        <PrimaryButton label='-' onclick={dec} />
        <PrimaryButton label='+' onclick={inc} />
      </View>
    </>
  )
}

export default CounterV2;