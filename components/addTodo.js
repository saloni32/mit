import React  from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AddTodo({item,pressAdd}){
    return (
       
            <TouchableOpacity onPress={()=>pressAdd(item)}>
               <View style={styles.title}>
               <Text style={styles.items}>{item.text}</Text>
               </View>
            </TouchableOpacity>
          
    )
}

const styles = StyleSheet.create({
    title: {
        padding : 8,
        marginTop :8,
        marginHorizontal:5,
        borderColor: 'pink',
        borderWidth: '2',
        borderStyle:'',
        backgroundColor:'skyblue',
        justifyContent: 'center',
        alignItems :'center',
    },
    items: {
        marginLeft: 10,
    }
});