import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function TodoItem({item, pressHandler})
{
  return(
    <TouchableOpacity onPress={()=>pressHandler(item.key)}>
       <View style={styles.item}>
        <MaterialIcons name='delete' size={18} color='#000'/>
       <Text style={styles.itemText}>{item.text}</Text>
       </View>
    </TouchableOpacity>
  )  
}

const styles = StyleSheet.create({
    item: {
        padding : 2,
        marginTop : 3,
        backgroundColor: 'lightblue',
        flexDirection:'row',
        paddingVertical :10
    },
    itemText: {
        marginLeft: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
});