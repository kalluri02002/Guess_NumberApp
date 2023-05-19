import { View ,Text,StyleSheet} from "react-native";
import Color from "../../constants/Color";
function GuessNumberr({roundNumber,Guest}){
    return(
        <View style={styles.ListItem}>
            <Text>#{roundNumber}</Text>
            <Text>Opponent ' s Guest:{Guest}</Text>
        </View>
    )

}
export default GuessNumberr
const styles=StyleSheet.create({
    ListItem:{
        borderColor:Color.primary2,
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor:Color.pasupu,
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        elevation:4,


    }
})

