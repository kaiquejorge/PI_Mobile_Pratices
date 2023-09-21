import { View, Text, Button, TextInput } from "react-native"
import styles from "./MyStyle"



const IMC = ({navigation}) => {
    return (
        <View style={styles.container}> 
            <TextInput style={styles.header} 
            placeholder="digite seu peso"
            defaultValue={peso}
            />
            <TextInput style={styles.header} 
            placeholder="digite altura"
            defaultValue={altura}
            />

            <Button
                title="Abrir Modal"
                onPress={() => navigation.navigate('ModalScreen')}
            />
            
            <Button
                title="OK"
                onPress={() => navigation.navigate('Perfil',{student})}
            />
            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
    )
}

export default IMC