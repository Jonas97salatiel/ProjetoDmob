import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  
  return (
    <View style={styles.container}>
      <Text>Calculadora</Text>


      <View name="result"></View>

      <View name="buttonsLine" style={styles.buttonsLine} >
        <TouchableOpacity style={styles.buttons, styles.buttonsExpand1}>
          <Text style={styles.symbal}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.symbal} >=</Text>
        </TouchableOpacity>
      </View>

      <View name="buttonsLine" style={styles.buttonsLine}>
      <TouchableOpacity style={styles.buttons}>
          <Text style={styles.numbers} >7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.numbers} >8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.numbers} >9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.symbal} >+</Text>
        </TouchableOpacity>
      </View>

      <View name="buttonsLine" style={styles.buttonsLine}>
      <TouchableOpacity style={styles.buttons}>
          <Text style={styles.numbers} >4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.numbers}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.numbers} >6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.symbal} >-</Text>
        </TouchableOpacity>
      </View>

      <View name="buttonsLine" style={styles.buttonsLine}>
      <TouchableOpacity style={styles.buttons}>
          <Text style={styles.numbers} >1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.numbers} >2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.numbers} >3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.symbal} >/</Text>
        </TouchableOpacity>
      </View>

      <View name="buttonsLine" style={styles.buttonsLine}>
      <TouchableOpacity style={styles.buttons, styles.buttonsExpand}>
          <Text style={styles.numbers} >0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.symbal} >.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
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
    alignItems: 'center',
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
  }

});
