import {View, Text, Button} from "react-native"
import {useState} from "react"

const State = () => {
    //let contador = 0
    const [contador, setContador] = useState(0)
    return (
        <View>
            <Text style={{fontSize:25, fontWeight:"bold"}}>
                Contador: {contador}
            </Text>
                <Button
                    title="CONTAR + 1"
                    onPress={
                            () => {
                                setContador(prev => prev +3)
                            }
                    }
                />
        </View>
    )
}

export default State