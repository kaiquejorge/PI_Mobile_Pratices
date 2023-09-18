import { View, Text, FlatList } from 'react-native'
import { useEffect, useState , React} from 'react'
import estilos from "./13Estilos"
import { Table } from 'react-native-table-component'

const MyNetworking = () => {

  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const [movies,setMovies] = useState("")

  useEffect(
    () => {
      getMovies()
    },
    []
  )

  const getMovies = () => {
    fetch("https://reactnative.dev/movies.json")
    .then( response => response.json() )
    .then( 
      ({title,description,movies}) => {
      setTitle(title)
      setDescription(description)
      setMovies(movies)
      }
    )
    .catch( error=>console.log(error) )
  }

  return (
    <Table>
    <View style={estilos.container}>
      <Text style={estilos.header}>{title}</Text>
      <Text style={estilos.description}>{description}</Text>
      <FlatList
      data={movies}
      renderItem={
        ({item}) => {
          return (
            <View style={{flex:1,backgroundColor:"red"}}>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
              <Text>{item.releaseYear}</Text>            
            </View>
          )
        }
      }
    />
    </View>
    </Table>
    
  )
}

export default MyNetworking