import React from 'react';
import { View } from 'react-native';

import DirectChildren from './DirectChildren';

import styles from '../../../styles';

const DirectParent = () => {
  let x = 13;
  let y = 100;
  return (
    <>
      <DirectChildren a={x} b={y}/>
      <DirectChildren a={x + 100} b={y + 200}/>
    </>
  )
}

export default DirectChildren;