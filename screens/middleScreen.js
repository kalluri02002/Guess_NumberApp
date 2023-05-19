import { View,StyleSheet,Alert,Text,FlatList} from "react-native";
import Title from "../components/UI/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/Logic/Numbercontaner";
import  PrimaryButton from "../components/UI/PrimaryButton";
import Card from "../components/UI/Card";
import TExtStyle from "../components/UI/TExtStyle";
import{Ionicons} from "@expo/vector-icons";
import GuessNumberr from "../components/Logic/GuessNumberr";
let maxBoundery=100
let minBoudery=1
function MiddleSreen({userNumber,GameOver}){
   
    function RandomNumberGenerater(min,max, exclude){

        const rnNumber=Math.floor(Math.random()*(max-min))+min
        if(rnNumber===exclude){
            return RandomNumberGenerater(min,max, exclude)
        }
        else{
            return rnNumber
        }

    }

    
    const initiakGuess=RandomNumberGenerater(1,100,userNumber);
    const [currentGuess,setCurrentGuess]=useState(initiakGuess);
    const [guessRounds,setGuessRounds]=useState([initiakGuess]);
    
    
    function nextGuessHandler(direction){
        if((direction==="lower" && currentGuess<userNumber)||
        (direction==="Higher" && currentGuess>userNumber)){
            Alert.alert("Don't lie!",
            "You Know That this is wrong",[{text:"okey",style:"cancel"}])
            return;

        }
        if(direction==="lower"){
             maxBoundery=currentGuess
            

        }
        else{
            minBoudery=currentGuess+1
        }
        let newRandem=RandomNumberGenerater(minBoudery,maxBoundery,currentGuess);
        setCurrentGuess(newRandem)
        setGuessRounds([newRandem,...guessRounds])
        
    }
       
    
       useEffect(()=>{
        if (currentGuess===Number(userNumber)){
            GameOver(guessRounds.length)
        }

    },[currentGuess,userNumber,GameOver])
    useEffect(()=>{
        maxBoundery=100
        minBoudery=1


    },[])
    const GuessRundes_Number=guessRounds.length
    
    return(
        
        <View style={styles.containerMId}>
            <Title>Opponent Guest</Title>
            <NumberContainer>{currentGuess}</NumberContainer> 
            <Card>
                
                
                <TExtStyle style={styles.AddinitinalStyle}>Higher or Lower</TExtStyle>
                <View style={styles.ButtonsContaner}>
                    <View style={styles.ButtonLength}>
                     <PrimaryButton ONPRess={nextGuessHandler.bind(this,"lower")}>
                        <Ionicons name="md-remove" size={24} color="white"/>
                     </PrimaryButton>

                    </View>
                    <View style={styles.ButtonLength}>

                     <PrimaryButton ONPRess={nextGuessHandler.bind(this,"Higher")}>
                     <Ionicons name="md-add" size={24} color="white"/>
                     </PrimaryButton>
                    </View>
                    

                </View>
            </Card>
            {/* {guessRounds.map(guessRound=><Text key={guessRound}>{guessRound}</Text>)} */}
            <View style={styles.ListContainer}>
                <FlatList data={guessRounds} 
                renderItem={(ItemData)=> <GuessNumberr 
                    roundNumber={GuessRundes_Number-ItemData.index} Guest={ItemData.item}
                />} 
                keyExtractor={(item)=>item}/>
            </View>

           
        </View>
    )

}
export default MiddleSreen;
const styles= StyleSheet.create({
    containerMId:{
        padding:55,
        flex:1


    },
    ButtonsContaner:{
        flexDirection:"row"
    },
    ButtonLength:{
        flex:1
    },
    AddinitinalStyle:{
        paddingBottom:24,


    },
    ListContainer:{
        flex:1,
        padding:16

    }
    

    
})