import{Text,StyleSheet} from "react-native"
import Color from "../../constants/Color";
function Title({children}){
    return(
    <Text style={styles.Title}>{children}</Text>
    )
}
export default Title;
const styles=StyleSheet.create({
    
    Title:{
        fontSize:24,
        fontWeight:"bold",
        color:Color.primary3,
        textAlign:"center",
        borderWidth:2,
        padding:12,
        borderColor:Color.primary3,
        

    },
})
