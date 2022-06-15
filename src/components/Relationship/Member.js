import React from 'react';
import { Text } from 'react-native';

const Member = ({ name, lastName }) => {
  return (
    <>
      <Text>{name+' '+lastName}</Text>
    </>
  )
}

export { Member };