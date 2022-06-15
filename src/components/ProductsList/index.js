import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const ProductsList = () => {
  const productsList = [
    { id: 1, name: 'The Last of Us 2', price: 149.99 },
    { id: 2, name: 'Caderno', price: 19.99 },
    { id: 3, name: 'PlayStation 5', price: 2599.99 },
    { id: 4, name: 'Macbook', price: 9899.99 },
    { id: 5, name: 'Caneta', price: 4.99 }
  ]

  return (
    <View style={styles.table}>
      <View style={styles.tableHeader}><Text style={[styles.col, {color: '#fff'}]}>ID</Text><Text style={[styles.col, {flexGrow: 3, color: '#fff'}]}>NAME</Text><Text style={[styles.col, {flexGrow: 1, color: '#fff'}]}>PREÇO</Text></View>
      {productsList.map(product => {
        return <View style={styles.tableBody} key={product.id}><Text style={styles.col}>{product.id}</Text><Text style={[styles.col, {flexGrow: 3}]}>{product.name}</Text><Text style={[styles.col, {flexGrow: 1}]}>{product.price}</Text></View>
      })}
    </View>
  )
}

export default ProductsList;