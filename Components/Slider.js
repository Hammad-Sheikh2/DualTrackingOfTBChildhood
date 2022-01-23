import { StyleSheet, Text, View, Animated } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
const COLORS = [
  '#0f0',
  '#fa0',
  '#f00'
]
export default function Slider(props) {
  const [sliderValue, setSliderValue] = useState(0);
  const [translation,setTranslation] = useState(0);
  let sliderEachPointValue=[]
  for (let index = 0; index < 11; index++) {
    sliderEachPointValue.push(<Text style={{color:'white',fontWeight:'bold'}}>{index}</Text>)
  }
  const translatePickerOnScale=(e)=>{
    if (e.touchY-e.nativeEvent.pageY>20){
        //? Swipe Up
        if(translation<=0){
            return;
        }
        setTranslation(translation-20)
        e.touchY = e.nativeEvent.pageY
    }
    if (e.touchY-e.nativeEvent.pageY<-20){
        //? Swipe Down
        if(translation>=300){
            return;
        }
        setTranslation(translation+20)
        e.touchY = e.nativeEvent.pageY
    }
    setSliderValue(parseInt(translation/(300/10)))
  }
  
  return (
      <View style={styles.container}>
        <LinearGradient 
          colors={COLORS} 
          start={{x:0,y:0}}
          end={{x:0,y:1}}
          style={styles.scale}
        >
          <View style={styles.scaleInside}>
            {sliderEachPointValue}
          </View>
        </LinearGradient>
        <Animated.View 
          style={{
            position:'absolute',
            top:0,
            width:CIRCLE_PICKER_SIZE,
            height:CIRCLE_PICKER_SIZE,
            borderRadius:CIRCLE_PICKER_SIZE/2,
            backgroundColor:'white',
            borderWidth:3,
            borderColor:'rgba(0,0,0,0.1)',
            justifyContent:'center',
            alignItems:'center',
            transform:[{translateY:translation}]
          }}
          onTouchStart = { e => {e.touchY = e.nativeEvent.pageY;props.setItem(props.item)} }
          onTouchMove={ e => translatePickerOnScale(e) }
          onTouchEnd={()=>{props.onSlidingEnd(props.index,sliderValue)}}
          >
          <View style={styles.pickerInsider}>
            <Text style={{fontWeight:'bold',color:'white'}}>{sliderValue}</Text>
          </View>
        </Animated.View>
      </View>
  );
}

const CIRCLE_PICKER_SIZE=45;
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    width:50
  },
  scale:{
    flex:1,
    borderRadius:20
  },
  pickerInsider:{
    width:CIRCLE_PICKER_SIZE/2,
    height:CIRCLE_PICKER_SIZE/2,
    borderRadius:CIRCLE_PICKER_SIZE/4,
    elevation:10,
    shadowColor:'black',
    shadowOffset:{width:5,height:5},
    shadowOpacity:0.5,
    shadowRadius:CIRCLE_PICKER_SIZE/4,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black'
  },
  scaleInside:{
    justifyContent:'space-evenly',
    alignItems:'center',
    flexDirection:'column',
    flex:1
  }
});
