import { View, Text, Button, TextInput } from "react-native"
import styles from "./MyStyle"

const student = {nome: "Vivian", nota: 5.0}

const Cadastro = ({navigation}) => {
    return (
        <View style={styles.container}> 
            <TextInput style={styles.header} 
            placeholder="digite seu nome"
            defaultValue={nome}
            />
            <TextInput style={styles.header} 
            placeholder="digite seu idade"
            defaultValue={idade}
            />
            <TextInput style={styles.header} 
            placeholder="digite seu e-mail"
            defaultValue={email}
            />
            
            <Button
                title="OK"
                onPress={() => navigation.navigate('Perfil',{student})}
            />
            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
    )
}

export default Cadastro