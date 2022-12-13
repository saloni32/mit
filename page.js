import React ,{useState} from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-web';
import TodoItem from './components/TodoItem';
import AddTodo from './components/addTodo';
export default function Page() {
    const [todos, setTodos] = useState([
        {text: 'Move X by 50', key: '1'},
        {text: 'Move Y by 50', key: '2'},
        {text: 'Rotate 360', key: '3'},
        {text: 'Say Hello', key: '7'},
        {text: 'Increase Size', key: '9'},
        {text: 'Dec Size', key: '10'},
    ]);

    const [command,setCommand] = useState([
        
    ]);

    const pressHandler= (key) =>
    {
        setCommand((prevCommand)=>
        {
            return prevCommand.filter(command => command.key!=key);
        })
    }
    const pressAdd= (item) =>
    {
        setCommand((prevCommand)=>{
            return[
                {text :item.text ,key: item.key},
            ...prevCommand
            ]
        })
    }

    const navigation = useNavigation();
    const goToHomeScreen = () => {
      navigation.navigate('scratch', {
        command,
      });
  };
  return (
    <View style ={styles.box}>
        <View style={styles.header}>
            <Text></Text>
            <Button title="Done" 
              onPress={goToHomeScreen} color="skyblue" borderColor="#fff" />
        </View>
        <View style={styles.content}>
        <View style={styles.leftbox}>
            <View style={styles.code}>
                <Text style={styles.codetext}>CODE</Text>
            </View>
            <View style={styles.listleft}>
                <FlatList
                data={todos}
                renderItem={({item})=>(
                    <AddTodo item={item} pressAdd={pressAdd}/>
                )}
                />
            </View>
        </View>
        <View style={styles.rightbox}>
            <View style={styles.action}>
                <Text style={styles.actiontext}>ACTION</Text>
            </View>
            <View style={styles.listright}>
                <FlatList
                data={command}
                renderItem={({item})=>(
                    <TodoItem item={item} pressHandler={pressHandler}/>

                )}
                />
            </View>
        </View>
        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  box: {
    flex:1,
    backgroundColor: '#fff',
    flexDirection: "column"
  }, 
  content: {
    flex: 1,
    flexDirection:"row",
    
  },
  header : {
    height: 40,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingTop: 12,
    paddingBottom:7,
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:"center",
    marginRight: 10
  },
  leftbox: {
    flex: 1,
    backgroundColor:'#fff',
    borderColor: 'gray',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    margin: 6,
  },
  rightbox: {
    flex:1,
    backgroundColor:'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    margin: 6,
  },
  code: {
    justifyContent:'center',
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:'gray',
    paddingVertical:10
  },
  action: {
    justifyContent:'center',
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:'gray',
    paddingVertical:10
  },
  codetext:{
    fontWeight: 'bold',
    color: 'skyblue',
    fontSize: 'large'
  },
  actiontext:{
    fontWeight: 'bold',
    color: 'lightgreen',
    fontSize: 'large'
  }
});
