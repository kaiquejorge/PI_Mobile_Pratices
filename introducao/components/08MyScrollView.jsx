import { View, Text, Image, ScrollView } from "react-native"

const imagem = {
    uri: "https://akamai.sscdn.co/uploadfile/letras/fotos/e/9/7/8/e978e0246803f2fbcde5a10c2cad2976.jpg",
    width:706,
    height:530
}

const MyScrollView = () => {
    return (
        <ScrollView>
            <View
                style={{
                    flex:1,
                    justifyContent:"flex-start",
                    alignItems:"center",
                    paddingTop:40
                }}
            >
                <Text style={{fontSize:25, fontWeight:"bold"}}>TOVE LO</Text>
                <Image source={imagem}/>
                <Image source={imagem}/>
                <Image source={imagem}/>
                <Image source={imagem}/>
            </View>
        </ScrollView>
    )
}

export default MyScrollView