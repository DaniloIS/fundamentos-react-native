import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import FirstComponent from './src/components/FirstComponent';
import { Comp1, Comp2 } from './src/components/Mult';
import MinMax from './src/components/MinMax';
import Random from './src/components/Random';
import Title from './src/components/Title';
import Btn from './src/components/Button';
import Counter from './src/components/Counter';
import DirectParent from './src/components/Direct/DirectParent';
import IndirectParent from './src/components/Indirect/IndirectParent';
import CounterV2 from './src/components/Counter/CounterV2';
import { Device } from './src/components/Device';
import { ParImp } from './src/components/ParImp';
import { Family } from './src/components/Relationship/Family';
import { Member } from './src/components/Relationship/Member';

import styles from './styles';
import ProductsList from './src/components/ProductsList';
import { Mega } from './src/components/Mega';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Mega />
      {/* <ProductsList />
      <Family>
        <Member name='Danilo' lastName='Isidoro' />
        <Member name='Diego' lastName='Isidoro' />
      </Family>
      <ParImp />
      <Device />
      <CounterV2 />
      <IndirectParent />
      <DirectParent />
      <Title primary="Cadastro de Produto" secondary="Tela de Cadastro do Produto" />
      <Btn />
      <Counter />
      <FirstComponent value={2} />
      <Comp1 />
      <Comp2 />
      <MinMax min={10} max={20} />
      <Random min={5} max={15} /> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}