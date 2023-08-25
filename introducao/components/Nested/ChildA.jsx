import {View, Image} from "react-native"

const ChildA = () => {
    return (
        <View style={{backgroundColor: "navy", alignItems: "center"}}>
            <Image 
                source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Tame_Impala-3687_%2818659088669%29.jpg/1200px-Tame_Impala-3687_%2818659088669%29.jpg"}}
                style={{width:150, height:150}}
            />
        </View>
    )
}

export default ChildA