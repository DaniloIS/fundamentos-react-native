import React from 'react';
import { Text } from 'react-native';

const DirectChildren = ({ a, b }) => {
  return (
    <>
      <Text>{a}</Text>
      <Text>{b}</Text>
    </>
  )
}

export default DirectChildren;