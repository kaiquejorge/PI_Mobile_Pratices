import { View, Text, TextInput, Button, StyleSheet } from "react-native"
import { useState } from "react"

const Flexbox = () => {
  return (
    <View style={estilos.container}>
        <View style={estilos.view1}>
         <Text >
            teste teste
        </Text>
        </View>
        <View style={estilos.view2}>
        <Text >

        </Text>
        </View>
        <View style={estilos.view3}>
        
        </View>
      </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    marginTop:25,
    marginBottom: 25,
    backgroundColor:"lightskyblue",

    flex: 1,
    flexDirection: "row"
  },
  view1: {
    backgroundColor:"navy",
    flex: 1,
    height:100,
    width:100
  },
  view2: {
    backgroundColor:"yellow",
    flex: 1,
    height:100,
    width:100,
    alignSelf:"flex-end"
  },
  view3: {
    backgroundColor:"red",
    flex: 1,
    height:100,
    width:100
  }
})

export default Flexbox