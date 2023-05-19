import { View,Text,StyleSheet,Pressable } from "react-native"
import Color from "../../constants/Color"
function PrimaryButton({children,ONPRess}){
    function ONpress(){
        console.log("pressed")
    }
    return(
        

            <View style={styles.OuterContainer} >
                <Pressable onPress={ONPRess}  style={styles.INnerContainer} 
                android_ripple={{ color:Color.RippleEf}}>

                 <Text style={styles.ButtonText}>{children}</Text>
                </Pressable>
                
            </View>
    
    )

}
export default PrimaryButton
const styles=StyleSheet.create({
    OuterContainer:{
        margin:4,
        
    },

    INnerContainer:{
        backgroundColor:Color.primary1,
        borderRadius:32,
        
        paddingVertical:8,
        paddingHorizontal:16,
       
        elevation:4,
    },
    ButtonText:{
        textAlign:"center",
        color:Color.primary3

    }
})
