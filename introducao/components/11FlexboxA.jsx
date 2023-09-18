import { View, Text, TextInput, Button, StyleSheet } from "react-native"
import { useState } from "react"

const Flexbox = () => {
  return (
    <View style={estilos.container}>
        <View style={estilos.view1}>

        </View>
        <View style={estilos.view2}>
        
        </View>
        <View style={estilos.view3}>
        
        </View>
      </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    marginTop:25,
    backgroundColor:"cyan",
    flex: 1
  },
  view1: {
    backgroundColor:"green",
    flex: 1
  },
  view2: {
    backgroundColor:"yellow",
    flex: 1
  },
  view3: {
    backgroundColor:"red",
    flex: 1
  }
})

export default Flexbox
