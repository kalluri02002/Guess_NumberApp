
import {View,StyleSheet} from "react-native"
import Color from "../../constants/Color"
function Card({children}){
    return(
        <View style={styles.card}>
            {children}

        </View>
    )
}
export default Card
const styles=StyleSheet.create({
    card:{
        
       
            padding:16,
            marginTop:60,
            alignItems:"center",
            justifyContent:"center",
            
            
            backgroundColor:Color.primary2,
            marginHorizontal:16,
            borderRadius:8,
            elevation:8
    
    
       
    
        
    }

})