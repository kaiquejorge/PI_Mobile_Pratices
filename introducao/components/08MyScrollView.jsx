import { View, Text, Image, ScrollView } from "react-native"

const imagem = {
    uri: "https://www.quixada.ufc.br/wp-content/uploads/2016/07/Diana-Medina-225x300.png",
    width:225,
    height:300
}

const MyScrollView = () => {
    return (
        <ScrollView>
            <View
                style={{
                    flex:1,
                    justifyContent:"flex-start",
                    alignItems:"center"
                }}
            >
                <image source={imagem}/>
            </View>
        </ScrollView>
    )
}

export default MyScrollView