import  {View, Text, TextInput, Button} from "react-native"
import { useState } from "react"
import estilos from "./07CSS"
import MyPressable from "./07MyPressable"

const Calculadora = () => {
  const [number1,setnumber1] = useState("")
  const [number2,setnumber2] = useState("")
  const [result,setResult] = useState("")
  const [cor, setCor] = useState("white")

  function somar() {
      setResult(parseInt(number1) + parseInt(number2))
      //console.log(number1 + number2)
  }

  function subtrair() {
    setResult(parseInt(number1) - parseInt(number2))

  }

  function multiplicar() {
    setResult(parseInt(number1) * parseInt(number2))

  }

  function dividir() {
    const res = parseInt(number1) / parseInt(number2)
    setResult(( res.toFixed(4) ))

  }

  return (
    <View style={[estilos.container]}>
          <Text style={estilos.header}>CALCULADORA 0.1</Text>
          <TextInput 
              style={estilos.input}
              onChangeText={(numero)=>setnumber1(numero)}
              keyboardType="numeric"
          />
          <TextInput 
              style={estilos.input}
              onChangeText={(numero)=>setnumber2(numero)}
              keyboardType="numeric" 
          />
          <View style={estilos.containerBotoes}>
              <Button title="SOMAR" onPress={somar} />
              <Button title="SUBTR" onPress={subtrair} />
              <Button title="MULTI" onPress={multiplicar}/>
              <Button title="DIVID" onPress={dividir} />
          </View>
          <View style={{ flexDirection: 'row', margin:10, justifyContent:"center"}}>
          <MyPressable funcao={somar} titulo="SOMAR" style={{paddingRight:20}} />
          <MyPressable funcao={subtrair} titulo="SUBTR" style={{paddingRight:20}} />
          <MyPressable funcao={multiplicar} titulo="MULTI" style={{paddingRight:20}} /> 
          <MyPressable funcao={dividir} titulo="DIVID"/>
          </View>
          <Text style={[estilos.header, {marginTop:20}]}>
              Resultado: {result}
          </Text>
    </View>
  )
}


export default Calculadora

