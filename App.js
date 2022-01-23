import { StyleSheet, View, StatusBar } from 'react-native';
import TopBar from './Components/TopBar.js';
import Slider from './Components/Slider.js';
import React, {useState} from 'react'
import { data } from './Data.js';
import BottomBar from './Components/BottomBar.js';
import Icon from './Components/Icon.js';

export default function App() {
  const [Item, setItem] = useState(data[0]);
  const [language, setLanguage] = useState('English');
  const SetValue=(index,value)=>{
    data[index].Value=value;
    /*setSliderValue(data[0].Value===null?0:data[0].Value)
    setItem(data[0])
    setCurrentDataItem(0)*/
  }
  let sliders=[]
  let Icons=[]
  for (let index = 0; index < data.length; index++) {
    sliders.push(<Slider setItem={setItem} index={index} item={data[index]} onSlidingEnd={SetValue}/>)
    Icons.push(<Icon setItem={setItem} Item={data[index]}  />)
  }
  const GetQuestion=(Language)=>{
    switch(Language){
      case 'English':
        return Item.Question.English
      case 'Urdu':
        return Item.Question.Urdu
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <TopBar ChangeLanguage={setLanguage} />
      <View style={{flex:0.5,flexDirection:'row', flexWrap:'wrap',justifyContent:'center'}}>
        {Icons}
      </View>
      <View style={{flex:1,flexDirection:'row'}}>
        {sliders}
      </View>
      <BottomBar Animation={Item.Animation} GetQuestion={GetQuestion} language={language} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
