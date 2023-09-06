import { StyleSheet, Text, View } from 'react-native';
//import HelloRN from './components/01HelloRN';
//import HelloRN2 from './components/02HelloRN2';
//import Cat from './components/03FullName';
//import Parent from './components/Nested/Parent';
//import State from './components/04State';
//import Questao01 from './components/tarefa01/Questao01';
//mport Questao02 from './components/tarefa01/Questao02';
//import JuntarFrases from './components/06JuntarFrases';
//import Calculadora from './components/07Calculadora/07Calculadora';
//import MyScrollView from './components/08MyScrollView';
import MyFlatList from './components/09MyFlatList';


export default function App() {
  return (
    <MyFlatList />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: "bold",
    color: "red"
  }
});
