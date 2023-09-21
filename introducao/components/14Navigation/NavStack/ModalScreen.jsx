import { View, Text, Button } from "react-native"
import styles from "./MyStyle"


const ModalScreen = ({navigation}) => {
    return (
        <View style={styles.container}> 
            <Text style={styles.header}>Tela Modal</Text>
            <Button title="HOME" onPress={() => navigation.navigate('MainNavApp')} />
        </View>
    )
}

export default ModalScreen