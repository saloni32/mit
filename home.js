import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View ,Image, Button, Text, Animated} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const route= useRoute();
  const array=route.params.command;
  console.log(array);
  const navigation = useNavigation();
    const goToPageScreen = () => {
      navigation.navigate('Scratch', {
      });
    };

    const position=new Animated.ValueXY({x:0, y:0})
    
  const playFun = () => {
    array.map((d)=>
    {
      if(d.text=="Move X by 50")
      {
        Animated.timing(position,{
          toValue: {x:50,y:position.y},
          duration:1000
        }).start()
      }
      else if(d.text=="Move Y by 50")
      {
        Animated.timing(position,{
          toValue: {x:position.x,y:50},
          duration:3000
        }).start()
      }
    }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}></View>
      <View style={styles.navbar1}>
      <Button title="Play" 
        onPress={playFun} color="skyblue" borderColor="#fff" />
        <Animated.Image style={{
          width: 50,
          height:70,
          transform:[
            {translateX:position.x},
            {translateY:position.y}
          ]
        }} source={require('./assets/icon.png')}/>
      </View>
      <View style={styles.navbar2}>
        <View style={styles.tab1}>
        <Text>Sprit : </Text>
        <Text style={styles.coo}>  Cat</Text>
        </View>
        <View style={styles.tab2}>
        <Text>X : </Text>
        <Text style={styles.coo}>  0.00</Text>
        </View>
        <View style={styles.tab3}>
        <Text>Y : </Text>
        <Text style={styles.coo}>  0.00</Text>
        </View>
      </View>
      <View style={styles.navbar3}>
        <View style={styles.card}>
        <Image style={styles.cardTop} source={require('./assets/icon.png')}/>
        <Button title="Add action" 
              onPress={goToPageScreen} color="skyblue" borderColor="#fff" flex='0.4'/>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    textAlign: 'center',
    justifyContent: 'center',
  },
  navbar:{
    width: "100%",
    height: 1,
    backgroundColor: "#D3D3D3"
  },
  navbar1:{
    width: "100%",
    height: "63%",
    backgroundColor: "white",
    marginTop: 5,
    marginHorizontal:5,
    borderColor:"black",
    borderWidth:1,
    borderRadius:5,
  },
  navbar2:{
    width: "100%",
    height: "10%",
    backgroundColor: "white",
    marginTop: 5,
    marginHorizontal:5,
    borderColor:"black",
    borderWidth:1,
    borderRadius:5,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center"
  },
  navbar3:{
    width: "100%",
    height: "20%",
    backgroundColor: "white",
    marginTop: 5,
    marginHorizontal:5,
    borderColor:"black",
    borderWidth:1,
    borderRadius:5,
    flexDirection:"row"
  },
  //   show:{
    
  // },
  tab1:{
      flexDirection:"row"
  },
  tab2:{
    flexDirection:"row"
  },
  tab3:{
    flexDirection:"row"
  },
  coo: {
    borderWidth: 1,
    borderStyle: "solid",
    padding: 5,
    borderRadius: 10,
    borderColour: "#D3D3D3",
    marginBottom: 5
  },
  card: {
    borderColor: 'black',
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
    widht: 10,
    height: 90,
    margin:5,
    flexDirection:'column',
    marginTop:20,
    marginRight:360,
    alignItems: 'center',
    justifyContent:'center',
    flexWrap:'nowrap',
    flex:0.4
  },
  cardTop:{
    width:35,
    height:35,

  }
});
