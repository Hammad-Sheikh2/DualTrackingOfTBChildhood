import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Icon(props) {
  return (
    <View onStartShouldSetResponder={()=>{props.setItem(props.Item)}}>
      <Image source={props.Item.Icon} resizeMode='contain' style={styles.IconImage} />
      <Text>{props.Item.Name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    IconImage:{
        width:20,
        height:20,
        borderRadius:20/2
    },
});
