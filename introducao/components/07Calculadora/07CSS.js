import  {StyleSheet} from "react-native"

const estilos = StyleSheet.create({

  container: {
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  header: {
    fontSize:22,
    fontWeight:"bold"
  },
  input: {
    height:50,
    width:275,
    borderColor:"blue",
    borderWidth:2,
    paddingLeft:10,
    margin:5,
    borderRadius:10,

    fontSize:20,
    
  },
  containerBotoes: {
    flexDirection: "row",
    width:300,
    justifyContent:"space-evenly",
    marginTop:5,
  }
})

export default estilos