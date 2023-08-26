import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useState } from 'react';

const Questao01 = () =>  {
  const [imagemAlternativa, setImagemAlternativa] = useState(true);

  return (
    <View>
            {imagemAlternativa ? <Image source={require('../../assets/kaique.jpg')} style={{ width: 200, height: 200, borderRadius: 100, margin: 25 }} /> : <Image source={require('../../assets/kaique2.jpg')} style={{ width: 200, height: 200, borderRadius: 100, margin: 25 }} />}
            <Button title="Mudar Imagem" onPress={() => setImagemAlternativa(!imagemAlternativa)} />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Kaique Jorge</Text>
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>Design Digital - 6° semestre</Text>
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>Quixadá - CE</Text>
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
    height: 400,
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
