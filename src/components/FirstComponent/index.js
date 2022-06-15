import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

const FirstComponent = ({ value }) => {

  const tabuada = (num) => {
    for(let i = 0; i <= 10; i++) {
      return (
        <Text>{i+' x '+num+' = '+i*num}</Text>
      )
    }
  }

  return (
    <View>
      <Text>Olá mundoa</Text>
      
      <Text>Tabuada</Text>
      {tabuada(value)}
    </View>
  )
}

export default FirstComponent;