import React, { useState } from 'react';
import { Text } from 'react-native';

import { Input } from '../Input';
import { PrimaryButton } from '../Button';

const Mega = () => {
  const [qtdeNum, setQtdeNum] = useState()
  const [numbers, setNumbers] = useState([])

  const renderNumNotInclud = nums => {
    const newNum = parseInt(Math.random() * 60) + 1
    return nums.includes(newNum) ? renderNumNotInclud(nums) : newNum
  }

  const renderNums = () => {
    let n = []
    for(let i = 0; i < qtdeNum; i++) {
      n.push(renderNumNotInclud(numbers))
    }
    setNumbers(n)
    
  }
console.log(numbers)
  return (
    <>
      <Text>Gerador de Mega-Sena</Text>
      <Text>{qtdeNum}</Text>
      <Input label='Qtde de números' value={qtdeNum} setvalue={setQtdeNum} type='numeric' />
      <PrimaryButton label='Gerar Números' onclick={renderNums}/>
      <Text>{numbers.join(', ')}</Text>
    </>
  )
}

export { Mega };