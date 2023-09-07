import { View, Text, SectionList, StyleSheet } from "react-native"

const dados = [
    {title:"K", data:[
        {nome:"Kaique", id:1},
        {nome:"Korn", id:2}
    ]},
    {title:"J", data:[
        {nome:"Jorge", id:3},
        {nome:"Jacques", id:4}
    ]},
    {title:"L", data:[
        {nome:"Lana Del Rey", id:5},
        {nome:"Lady Gaga", id:6}
    ]},
]

const MySectionList = () => {
    return (
        <View style={estilos.container}>
            <SectionList
                sections={dados}
                keyExtractor={(item) =>"asdfk" + item.id}
                renderItem={
                    ({item})=>{
                        return (
                            <Text style={{fontSize:25}}>{item.nome}</Text>
                        )
                    }

                }
                renderSectionHeader={
                    ({section})=>{
                        return (
                                <Text style={{fontSize:25, fontWeight:"bold"}}>{section.title}</Text>
                        )
                    }
                }
            />
            
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"flex-start",
        alignItems:"center",
        paddingTop:25
    }
})

export default MySectionList