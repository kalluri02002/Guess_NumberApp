import { Text ,StyleSheet} from "react-native"
import Color from "../../constants/Color"
function TExtStyle({children,style}){
    return(<Text style={[styles.TextStyles,style]}>{children}</Text>)

}
export default TExtStyle
const styles=StyleSheet.create({
    TextStyles:{
        fontSize:24,
        color:Color.pasupu
    },

})