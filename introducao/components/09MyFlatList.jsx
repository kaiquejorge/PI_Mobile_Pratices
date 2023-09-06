import { View, Text, FlatList } from "react-native"

const dados = [
    {key:1, nome:"Kaique", nota:7.0 },
    {key:2, nome:"Jorge", nota:5.0 },
    {key:3, nome:"Lolo", nota:7.2 },
    {key:4, nome:"Lana", nota:8.0 },
    {key:5, nome:"Charli", nota:6.9 },
    {key:6, nome:"Lizz", nota:7.0 },
    {key:7, nome:"Lorde", nota:7.0 },
    {key:8, nome:"Tommy", nota:7.0 },
    {key:9, nome:"Jonna", nota:7.0 },
    {key:10, nome:"Nicki", nota:7.0 },
    {key:11, nome:"Joe", nota:7.0 },
    {key:12, nome:"Tommy", nota:7.0 },
    {key:13, nome:"Jonna", nota:7.0 },
    {key:14, nome:"Nicki", nota:7.0 },
    {key:15, nome:"Joe", nota:7.0 },
    {key:16, nome:"Tommy", nota:7.0 },
    {key:17, nome:"Jonna", nota:7.0 },
    {key:18, nome:"Nicki", nota:7.0 },
    {key:19, nome:"Joe", nota:7.0 },
    {key:20, nome:"Tommy", nota:7.0 },
    {key:21, nome:"Jonna", nota:7.0 },
    {key:22, nome:"Nicki", nota:7.0 },
    {key:23, nome:"Joe", nota:7.0 },
    {key:24, nome:"Tommy", nota:7.0 },
    {key:25, nome:"Jonna", nota:7.0 },
    {key:26, nome:"Nicki", nota:7.0 },
    {key:27, nome:"Joe", nota:7.0 },
]

const MyFlatList = () => {
    return (
        <View
            style={{
                flex:1,
                justifyContent:"flex-start",
                alignItems:"center",
                marginTop:20
            }}
        
        >
            <FlatList
                data={dados}
                renderItem={
                    ({item})=>{
                        return (
                            <View>
                                <Text style={{fontSize:25, fontWeight:"bold"}}>
                                    {item.nome} - {item.nota}

                                </Text>
                            </View>
                        )
                    }
                }
            />
        </View>
    )
}

export default MyFlatList