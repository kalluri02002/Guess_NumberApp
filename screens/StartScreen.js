import { View,TextInput ,StyleSheet,Alert,Text} from 'react-native'
import { useState } from 'react'
import PrimaryButton from "../components/UI/PrimaryButton"
import Color from '../constants/Color';
import Title from '../components/UI/Title';
import Card from '../components/UI/Card';
import TExtStyle from '../components/UI/TExtStyle';
function StartScreen( {getNumber}){
    const [EnterdVal,setEnterd]=useState("");
    function numbErINpute(Entext){
        setEnterd(Entext)

    }
    function resetINput(){
        setEnterd('')
    }
    function confirmInputHandler(){
        const chosenNumber=parseInt(EnterdVal)
        if (isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){
            Alert.alert(
                'Invalid Number!',
                'Number has to be Number 1 and 99.',
                [{text:"Okey", style:'destructive',onPress:resetINput}]


            )


        }
        else{

            getNumber(EnterdVal)
        }
        

    }
    return(
        <View  style={styles.RootContaner}>
            <Title>Guess My Number</Title>
            <Card>
                <TExtStyle>Enter a Number</TExtStyle>
                <TextInput style={styles.NumberINput} maxLength={2} 
                keyboardType='number-pad'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={numbErINpute}
                value={EnterdVal}
                
                
                />
                <View style={styles.ButtonsContaner}>
                    
                    <View style={styles.ButtonLength}>

                    <PrimaryButton ONPRess={resetINput} >Reset</PrimaryButton>
                    </View>
                    <View style={styles.ButtonLength}>

                    <PrimaryButton ONPRess={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>

                </View>
                
                

            </Card>
        </View>
    )

}
export default StartScreen
const styles=StyleSheet.create({
    RootContaner:{ 
        flex:1,
        marginTop:100,
        alignItems:"center"
    },
   
    
    NumberINput:{
        height:50,
        width:50,
        fontSize:32,
        borderBottomColor:Color.pasupu,
        borderBottomWidth:2,
        color:Color.pasupu,
        fontWeight:"bold",
        marginVertical:8

    },
    ButtonsContaner:{
        flexDirection:"row"
    },
    ButtonLength:{
        flex:1
    }



}
)