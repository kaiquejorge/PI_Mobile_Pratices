import { View, Text, SectionList, StyleSheet } from "react-native"
import { PaperProvider, IconButton, MD3Colors } from "react-native-paper"
import MyIconButton from "./MyIconButtons"

const data = [
    {title:"Terça", data:[
        {nome:'Pinheiro Supermercado', hora:"16:41", value:"R$274,79", icon:'cart', id:1},
        {nome:'Netflix.com', hora:'5:18', value:'R$39,90', icon:'tools', id:2},
    ]},
    {title:"25 de Setembro", data:[
        {nome:'3742Drogasil', hora:"17:25", value:"R$151,37", icon:'medical-bag', id:3}
    ]},
    {title:"24 de Setembro", data:[
        {nome:'Pag*Bodegas', hora:'10:23', value:'R$7,49', icon:'cart', id:5},
        {nome:'Pag*Bodegas', hora:'9:39', value:'R$6,90', icon:'cart', id:6}
    ]},
    {title:"21 de Setembro", data:[
        {nome:'Pinheiro Supermercado', hora:'10:41', value:'R$226,94', icon:'cart', id:7}
    ]}
]

const MySectionList = () => {
    return (
        <View style={estilos.container}>
            <SectionList
                sections={data}
                keyExtractor={(item) =>"name" + item.id }
                renderItem={
                    ({item})=>{
                        return (
                            <Text style={{fontSize:25}}>{item.nome},{item.hora}, {item.value} </Text>
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