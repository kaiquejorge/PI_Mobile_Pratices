import { View, Text, TextInput, StyleSheet } from "react-native"
import { useState } from "react"

const MyTextInput = () => {

    const [frase, setFrase] = useState("")

    return (
        <View style={estilos.view}>
            <Text style={estilos.header}>Tradutor emoji</Text>
            <TextInput
                style={estilos.input}
                placeholder="digite uma frase!"
                defaultValue={frase}
                onChangeText={(textoDigitado)=>setFrase(textoDigitado)
                }
            />
            <TextInput
                style={estilos.input}
                placeholder="digite uma frase!"
                defaultValue={frase}
                onChangeText={(textoDigitado)=>setFrase(textoDigitado)
                }
            />
            <Text style={estilos.frase}>
                {
                
                frase
                .split(" ")
                .map((palavra) => palavra && "😎" )
                .join(" - ")
                
                }
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

export default MyTextInput