
import { Text,View ,StyleSheet} from "react-native";
import Color from "../../constants/Color";
function NumberContainer({children}){
    return(
    <View style={styles.container}>
        <Text style={styles.textContaner}>{children}</Text>
    </View>)

}
export default NumberContainer
const styles=StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:Color.pasupu,
        padding:24,
        margin:24,
        borderRadius:8,
        alignItems:"center",
        justifyContent:"center"
        
        
    },
    textContaner:{
        color:Color.pasupu,
        fontSize:36,
        fontWeight:"bold"
    }
})