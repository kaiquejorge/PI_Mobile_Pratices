import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Questao02 = ({ cor }) => {
  const disciplinasFavoritas = [
    'Disciplina 1',
    'Disciplina 2',
    'Disciplina 3',
    'Disciplina 4',
  ];

  return (
    <View style={styles.container}>
      <Text style={{ color: cor, fontSize: 18 }}>
        Suas Disciplinas Favoritas:
      </Text>
      {disciplinasFavoritas.map((disciplina, index) => (
        <Text key={index} style={{ color: cor }}>
          {disciplina}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
  },
});

export default Questao02;
