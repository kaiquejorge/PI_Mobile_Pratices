import { View, Text } from "react-native"
import { useState, useEffect } from "react"

const PokemonModalScreen = ({navigation}) => {
  return (
    <View>
      <Text>TELA MODAL</Text>
      <Button
        title="FECHAR MODAL"
        onPress={() => navigation.goBack("PokemonModal")}
      />
    </View>
  )
}

export default PokemonModalScreen