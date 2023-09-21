import { View, Text, Button } from "react-native"
import styles from "./MyStyle"



const Perfil = ({navigation}) => {
    return (
        <View style={styles.container}> 
            <Text style={styles.header} > {nome} </Text>
            <Text style={styles.header} > {idade} </Text>
            <Text style={styles.header} > {email} </Text>
            
            <Button
                title="OK"
                onPress={() => navigation.navigate('HOME')}
            />
            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
    )
}

export default Perfil