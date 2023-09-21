import { View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Cadastro from "./Cadastro"
import IMC from "./IMC"
import Sobre from "./Sobre"
import Perfil from "./Perfil"
import ModalScreen from "./ModalScreen"


const Stack = createNativeStackNavigator()


const MainNavApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Group>
                    <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Cadastro' }} />
                    <Stack.Screen name="IMC" component={IMC} options={{ title: 'IMC' }} />
                    <Stack.Screen name="Perfil" component={Perfil} options={{ title: 'Perfil' }} />
                    <Stack.Screen name="Sobre" component={Sobre} options={({ route }) => ({ title: route.params.name })} />
                </Stack.Group>
                <Stack.Group screenOptions={{
                    presentation: "modal",
                    contentStyle: { backgroundColor: "powderblue" },
                    headerShown: false
                }}>
                    <Stack.Screen name="MyModal" component={ModalScreen} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default MainNavApp