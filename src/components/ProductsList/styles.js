import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  table: {
    backgroundColor: 'gray',
    width: '90%'
  },

  tableHeader: {
    backgroundColor: '#000',
    fontVariant: '#fff',
    padding: 10,
    flexDirection: 'row'
  },

  tableBody: {
    backgroundColor: 'gray',
    padding: 10,
    flexDirection: 'row'
  },

  col: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },

  row: {
    flexDirection: 'row'
  }
})