import { View, Text, Button, FlatList } from "react-native"
import { useState, useEffect } from "react"

const PokedexScreen = ({navigation}) => {

  const [pokemons, setPokemons] = useState([])

  useEffect(
    () => {
        fetchPokemons()
    }
    ,
    []
  )

  const fetchPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
    .then(response => response.json())
    .then(
          (json) => {
              let id = 1
              const vetorFormatado = json.results.map(
                ({name,url}) => {
                    return {id: url.split("/")[6],name,url}
                }
              )
              //console.log(vetorFormatado[0])
              setPokemons(vetorFormatado)
          }
        )
    .catch(error => console.log(error))

  }


  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Text>Pokedex Screen</Text>
      {/* <Button */}
        {/* title="ABRIR MODAL" */}
        {/* onPress={() => navigation.navigate("PokemonModal")} */}
      {/* /> */}
      <FlatList
          data = {pokemons}
          renderItem = {
            ({item}) => {
              return (<Text>
                {item.name}
              </Text>)
            }
          }
      />
    </View>
  )
}

export default PokedexScreen