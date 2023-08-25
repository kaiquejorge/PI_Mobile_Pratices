import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Questao01 = () =>  {
  // Defina as informações a serem exibidas
  const nomeCompleto = 'Seu Nome Completo';
  const cidadeOrigem = 'Sua Cidade de Origem';
  const cursoSemestre = 'Seu Curso e Semestre';

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Informações</Text>
      <Text><Text style={styles.label}>Nome Completo:</Text> <Text style={styles.bold}>{nomeCompleto}</Text></Text>
      <Text><Text style={styles.label}>Cidade de Origem:</Text> {cidadeOrigem}</Text>
      <Text><Text style={[styles.label, styles.redText]}>Curso e Semestre:</Text> {cursoSemestre}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  label: {
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  redText: {
    color: 'red',
  },
});

export default Questao01;
