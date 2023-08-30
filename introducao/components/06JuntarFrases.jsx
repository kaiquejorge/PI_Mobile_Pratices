import { View, Text, TextInput, Button, StyleSheet } from "react-native"
import { useState } from "react"

const JuntarFrases = () => {

    const [frase1, setFrase1] = useState("")
    const [frase2, setFrase2] = useState("")
    const [frase3, setFrase3] = useState("")

    return (
        <View style={estilos.view}>
            <Text style={estilos.header}>Tradutor emoji</Text>
            <TextInput
                style={estilos.input}
                placeholder="digite frase 1!"
                defaultValue={frase1}
                onChangeText={(textoDigitado)=>setFrase1(textoDigitado)
                }
            />
            <TextInput
                style={estilos.input}
                placeholder="digite uma frase 2!"
                defaultValue={frase2}
                onChangeText={(textoDigitado)=>setFrase2(textoDigitado)
                }
            />

            <View style={{width:300, height:100, fontSize:40}}>
                <Button
                    title="JUNTAR"
                    onPress={
                        ()=> {
                             console.log(frase1 + "  " + frase2)
                             setFrase3(frase1 + " " + frase2)
                        }
                    }
                />
            </View>

            <Text style={estilos.frase}>
                {frase3}
            </Text>
        </View>
    )
}

const estilos = StyleSheet.create({
        header:{
            fontSize:40,
            width:400,
            fontWeight:"bold",
            color:"red",
            padding:30,
            paddingBottom:20,
            marginLeft:60
        },
        view:{
            flex:1,
            alignItems:"center",
            padding:50,
            backgroundColor:"#C0C0C0"
        },
        input:{
            height:50,
            borderColor:"black",
            borderWidth:2,
            fontSize:22,
            paddingLeft:10
        }
    }
)

export default JuntarFrases