import { View, Text} from "react-native"
import ChildA from "./ChildA"
import ChildB from "./ChildB"

const Parent = () => {
    return (
        <View>
            <Text style={{fontSize: 25, fontWeight:"bold"}}>Eu sou o componente Pai</Text>
            <ChildA />
            <ChildB dica= "insira a dica aqui!" />
        </View>
    )
}

export default Parent