import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { Input } from '../Input';

const ParImp = () => {
  const [num, setNum] = useState('0')
  const [typeNumber, setTypeNumber] = useState('Par')

  useEffect(() => {
    if(parseInt(num) % 2 === 0) {
      setTypeNumber('Par')
    } else {
      setTypeNumber('Ímpar')
    }
  }, [num])

  return (
    <>
      <Text>{typeNumber}</Text>
      <Input label='Digite um número...' value={num} setvalue={e => setNum(e)} type='numeric' />
    </>
  )
}

export { ParImp };