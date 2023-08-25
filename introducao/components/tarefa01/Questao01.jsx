import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Questao02 from './Questao02';

const Questao01 = () =>  {
  const [imagemAlternativa, setImagemAlternativa] = useState(false);

  const alternarImagem = () => {
    setImagemAlternativa(!imagemAlternativa);
  };

  const nomeCompleto = 'Kaique Jorge';
  const cidadeOrigem = 'Quixadá/CE';
  const cursoSemestre = 'Design Digital - *';

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={alternarImagem}>
        <Image
          source={imagemAlternativa ? require('https://musicult.com.br/wp-content/uploads/2023/03/images.jpeg') : require('https://pbs.twimg.com/profile_images/1684592872568279040/Wt3r_6Jj_400x400.jpg')}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text style={styles.heading}>Informações</Text>
      <Questao02 cor="blue" />
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
    padding: 18,
    height: 800,
    width: 500
  },
  image: {
    width: 150, 
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'courier new'
  },
  text: {
    fontFamily: 'courier new'
  },
  label: {
    fontWeight: 'bold',
    fontFamily: 'courier new'
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
