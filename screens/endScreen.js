import { View ,Text,Image,StyleSheet} from "react-native";
import Title from "../components/UI/Title";
import Color from "../constants/Color";
import PrimaryButton from "../components/UI/PrimaryButton";

function EndSreen({userNumber,RoundCount,StartNewGame}){
    return(
    <View style={styles.RootContane}>
        <Title>GameOver!</Title>
         <View style={styles.Container}>

          <Image style={styles.image}  source={require("../assets/images/su.jpg")}/>
         </View>
         <Text style={styles.SammaryText}>Your phone needed <Text style={styles.Highlight}>{RoundCount} </Text> 
         rounds to guess the Number Your phone needed <Text style={styles.Highlight}>{userNumber}</Text>
         </Text>
         <PrimaryButton ONPRess={StartNewGame}>Start New Game</PrimaryButton>
        

    </View>)
}
export default EndSreen
const  styles=StyleSheet.create({
    RootContane:{
        flex:1,
        padding:24,
        justifyContent:"center",
        alignItems:"center"

    },
    Container:{
        width:300,
        height:300,
        borderRadius:150,
        borderWidth:3,
        borderColor:Color.primary4,
        overflow:"hidden",
        margin:36
        
    },
    image:{
        width:'100%',
        height:'100%'
    },
    SammaryText:{
        fontWeight:"bold",
        fontSize:22,
        textAlign:"center",
        paddingBottom:24,
        

        

    },
    Highlight:{
        color:Color.primary1

    }


})