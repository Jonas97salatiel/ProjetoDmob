import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

    const [count, setCount] = useState([]);

    function clear(){
      count.pop(count => {
        return count
      })
      setCount(...count);
    }

    function heandleZero(){
      setCount([
        count,  [0]
      ]);
    };

    function heandleOne(){
      setCount([
        count,  [1]
      ]);
    };

    function heandleTwo(){
      setCount([
        count,  [2]
      ]);
    };

    function heandleThree(){
      setCount([
        count, [3]
      ]);
    };

    function heandleFour(){
      setCount([
        count, [4]
      ]);
    };

    function heandleFive(){
      setCount([
        count, [5]
      ]);
    };

    function heandleSix(){
      setCount([
        count, [6]
      ]);
    };

    function heandleSeven(){
      setCount([
        count, [7]
      ]);
    };

    function heandleEight(){
      setCount([
        count, [8]
      ]);
    };

    function heandleNine(){
      setCount([
        count,  [9]
      ]);
    };

    function heandleDote(){
      setCount([
        count, ['.']
      ]);
    };

    function heandleAdicao(){
      setCount([
        count, ['+']
      ]);
    };

    function heandleSubtracao(){
      setCount([
        count, ['-']
      ]);
    };

    function heandleDivisao(){
      setCount([
        count, ['/']
      ]);
    };

    function heandleMultiplicacao(){
      setCount([
        count, ['*']
      ]);
    };


  return (
    <View style={styles.container}>
      <Text>Calculadora</Text>


      <View name="result" style={styles.calc} >
  <Text style={styles.result} >{count}</Text>
        </View>

      <View name="buttonsLine" style={styles.buttonsLine} >
        <TouchableOpacity style={styles.buttons, styles.buttonsExpand1} onPress={clear} >
          <Text style={styles.symbal}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.symbal} >=</Text>
        </TouchableOpacity>
      </View>

      <View name="buttonsLine" style={styles.buttonsLine}>
      <TouchableOpacity style={styles.buttons} onPress={heandleSeven} >
          <Text style={styles.numbers} >7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={heandleEight} >
          <Text style={styles.numbers} >8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={heandleNine} >
          <Text style={styles.numbers} >9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={heandleAdicao} >
          <Text style={styles.symbal} >+</Text>
        </TouchableOpacity>
      </View>

      <View name="buttonsLine" style={styles.buttonsLine}>
      <TouchableOpacity style={styles.buttons} onPress={heandleFour} >
          <Text style={styles.numbers} >4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={heandleFive} >
          <Text style={styles.numbers}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={heandleSix} >
          <Text style={styles.numbers} >6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={heandleSubtracao} >
          <Text style={styles.symbal} >-</Text>
        </TouchableOpacity>
      </View>

      <View name="buttonsLine" style={styles.buttonsLine}>
      <TouchableOpacity style={styles.buttons} onPress={heandleOne} >
          <Text style={styles.numbers} >1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={heandleTwo} >
          <Text style={styles.numbers} >2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={heandleThree} >
          <Text style={styles.numbers} >3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={heandleDivisao} >
          <Text style={styles.symbal} >/</Text>
        </TouchableOpacity>
      </View>

      <View name="buttonsLine" style={styles.buttonsLine}>
      <TouchableOpacity style={styles.buttons, styles.buttonsExpand} onPress={heandleZero} >
          <Text style={styles.numbers} >0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={heandleDote} >
          <Text style={styles.symbal} >.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={heandleMultiplicacao} >
          <Text style={styles.symbal} >x</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    backgroundColor:'black'
  },

  buttonsLine:{
    flexDirection:'row',
    justifyContent:'space-around',
  },

  buttons:{
    flex:1,
    width: '20%',
    height:75,
    margin:5,
    backgroundColor:'#333333',
    alignItems:'center',
    justifyContent: 'space-around',
    borderRadius:50,
    borderWidth:.5,
    borderColor:'black',
  },

  buttonsExpand:{
    flex:2,
    width: '20%',
    height:75,
    margin:5,
    backgroundColor:'#333333',
    alignItems:'center',
    justifyContent: 'space-around',
    borderRadius:50,
    borderWidth:.5,
    borderColor:'black',
  },

  buttonsExpand1:{
    flex:3,
    width: '20%',
    height:75,
    margin:5,
    backgroundColor:'#333333',
    alignItems:'center',
    justifyContent: 'space-around',
    borderRadius:50,
    borderWidth:.5,
    borderColor:'black',
  },

  numbers:{
    fontSize:36,
    color:'white',
    
  },

  symbal:{
    fontSize:36,
    color:'#EF9B3A',
  },

  calc:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'flex-end',

  },

  result:{
    fontSize:48,
    color:'white',
    marginRight:30,
    
  },

});
