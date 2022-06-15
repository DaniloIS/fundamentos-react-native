import React from 'react';
import { Pressable, Text } from 'react-native';

import { PrimaryButton } from '../Button';

const IndirectChildren = ({ min, max, func }) => {

  function randomNumber(min, max) {
    const f = max - min + 1;
    return parseInt(Math.random() * f) + min;
  }



  return (
    <>
      <PrimaryButton
        onclick={() => func(randomNumber(min, max))}
      />
    </>
  )
}

export default IndirectChildren;