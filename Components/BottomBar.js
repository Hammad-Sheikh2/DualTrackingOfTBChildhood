import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function BottomBar(props) {
  return (
    <View style={styles.BottomBox}>
        <View>
          <Image resizeMode='contain' source={props.Animation} style={styles.SymptomAnimationImage} />
        </View>
        <View style={styles.QuestionView}>
          <Text style={{fontWeight:'bold',fontSize:15}}>{props.GetQuestion(props.language)}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    QuestionView:{
        borderStyle:'solid',
        borderWidth:1,
        paddingHorizontal:30,
        paddingVertical:10,
        borderRadius:50,
        borderColor:'#000'
    },
    BottomBox:{
        flex:1,
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    SymptomAnimationImage:{
        width:200,
        height:150
    }
});
