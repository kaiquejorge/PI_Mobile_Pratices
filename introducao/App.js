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
//import MyFlatList from './components/09MyFlatList';
//import MySectionList from './components/10MySectionList';
//import Flexbox from './components/12FlexboxB';
//import MyNetworking from './components/13MyNetworking';
//import MainNavApp from './components/14Navigation/NavStack/MainNavApp';
//import PokemonApp from './components/15Pokemon/PokemonApp'
import ShoppingList from './components/AP1/Questao01';
//import MyIconButton from './components/AP1/MyIconButtons';

export default function App() {
  return (
    <ShoppingList />
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