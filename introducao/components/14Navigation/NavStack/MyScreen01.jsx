import { View, Text, Button } from "react-native"
import styles from "./MyStyle"

const student = {nome: "Vivian", nota: 5.0}

const Screen01 = ({navigation}) => {
    return (
        <View style={styles.container}> 
            <Text style={styles.header}>Screen 01</Text>
            <Button
                title="Ir para Screen02"
                onPress={() => navigation.navigate('Screen02',{student})}
            />
            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
    )
}

export default Screen01