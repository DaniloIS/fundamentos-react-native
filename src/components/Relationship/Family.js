import React from 'react';
import { Text } from 'react-native';

const Family = ({ children }) => {
  return (
    <>
      <Text>Membros da família:</Text>
      {children}
    </>
  )
}

export { Family };