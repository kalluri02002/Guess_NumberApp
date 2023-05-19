
import { StyleSheet ,ImageBackground,SafeAreaView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import StartScreen from './screens/StartScreen';
import { useState } from 'react';
import MiddleSreen from './screens/middleScreen';
import Color from './constants/Color';
import EndSreen from './screens/endScreen';



export default function App() {
  const [Number5,Setnumber]=useState()
  const[isGameOver,setGameover]=useState(false)
  const[RoundC,setRound]=useState(0)
  function getNumber(val){
    Setnumber(val)
  } 
  function OnGameOver(numberOfRoudes){
    setGameover(true)
    setRound(numberOfRoudes)
  }
  function StartNewGame(){
    setRound(0)
    Setnumber(null)
    setGameover(false)
    

  }
  let screens=<StartScreen getNumber={getNumber}/>
  if (Number5){
    screens=<MiddleSreen userNumber={Number5} GameOver={OnGameOver} />

  }
  if (isGameOver && Number5){
    screens=<EndSreen userNumber={Number(Number5)} RoundCount={RoundC} StartNewGame={StartNewGame}/>
  }

  

    

  
  return (
    <LinearGradient colors={[Color.primary1,Color.pasupu]} style={styles.rootApp}>
      <ImageBackground source={require("./assets/images/Dice.jpg")} 
      resizeMode='cover'
      style={styles.rootApp}
      imageStyle={styles.IMageStyle}

      >
        <SafeAreaView style={styles.rootApp}>

         {screens}
        </SafeAreaView>
        
      
      </ImageBackground>
   </LinearGradient>
      
   
   

      
   
    
  );
}

const styles = StyleSheet.create({
  rootApp:{
    flex:1,

    
  },
  IMageStyle:{
    opacity:0.15
  }
 
});
