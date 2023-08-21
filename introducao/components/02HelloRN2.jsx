import {Text, Image, ScrollView, TextInput} from 'react-native'

const HelloRN2 = () => {
    return (
        <ScrollView>
            <Text>React Native 4 Cats</Text>
            <Image 
                source={{uri:'https://shop.tove-lo.com/cdn/shop/products/pinbadge.jpg'}}
                style={{width:200, height:200}}
            />
            <TextInput
                style={{
                    height: 50,
                    borderColor: 'black',
                    borderWidth: 2,
                    fontSize: 8,
                    paddingLeft: 21,

                }}
                defaultValue='clique aqui se deseja me escrever algo'

            />
        </ScrollView>
    )
}

export default HelloRN2