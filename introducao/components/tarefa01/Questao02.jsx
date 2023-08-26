import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Questao02 = ({ cor }) => {

        return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: "bold", padding: 20 }}>Disciplinas que curti:</Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: cor }}>Inglês Instrumental I</Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: cor }}>Design e Inovação</Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: cor }}>Engenharia Semiótica</Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: cor }}>Projetos de Interface Web</Text>
        </View >
    );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default Questao02;
