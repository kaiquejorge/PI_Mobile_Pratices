import { View, Text } from "react-native"
import { PaperProvider, IconButton, MD3Colors } from "react-native-paper"

const MyIconButton = () => {
    return (
        <PaperProvider>
            <View style={{
                marginTop: 30,
                flex: 1,
                alignItems: "center"

            }}>
                <IconButton
                    icon="cart"
                    iconColor={MD3Colors.tertiary0}
                    size={30}
                    onPress={() => console.log('Pressed')}
                    mode="contained"
                />
                <IconButton
                    icon="medical-bag"
                    iconColor={MD3Colors.tertiary0}
                    size={30}
                    onPress={() => console.log('Pressed')}
                    mode="contained"
                />
                <IconButton
                    icon="tools"
                    iconColor={MD3Colors.tertiary0}
                    size={30}
                    onPress={() => console.log('Pressed')}
                    mode="contained"
                    disabled={true}
                />
            </View>
        </PaperProvider>

    )
}

export default MyIconButton