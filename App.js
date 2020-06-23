import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function App() {

    const [display, setDisplay] = useState(" "); // State que recebe os valores do display
    const [count1, setCount1] = useState(); 
    var count2;
    const [operator, setOperator] = useState(" ");
    const [buffer, setBuffer] = useState(" ");
   



    
    function handleOperator(operatorOption){
          

      if( !display == " " && operator == " "){
        console.log('iniciado equação');
        switch(operatorOption){     
          case 'somar':
            setOperator(operatorOption);
            setCount1(parseFloat(display));
            setDisplay(" ");
            
          break;

          case 'subtrair':
            setOperator(operatorOption);
            setCount1(parseFloat(display));
            setDisplay(" ");
            
          break;

          case 'multiplicar':
            setOperator(operatorOption);
            setCount1(parseFloat(display));
            setDisplay(" ");
            
          break;

          case 'dividir':
            setOperator(operatorOption);
            setCount1(parseFloat(display));
            setDisplay(" ");
            
          break;

        };
        
      }else if(!buffer == " " || !operator == " "){
        console.log('mudando equação');
        switch(operatorOption){
          case 'somar':
            setOperator(operatorOption);
            
            
          break;

          case 'subtrair':
            setOperator(operatorOption);
            
           
          break;

          case 'multiplicar':
            setOperator(operatorOption);
            
            
          break;

          case 'dividir':
            setOperator(operatorOption);
           
          
          break;

        };

      }; 

    };

    function soma(float1, float2){
      return float1 + float2;
    }

    function subtracao(float1, float2){
      return float1 - float2;
    }

    function divisao(float1, float2){
      return float1 / float2;
    }

    function multiplicacao(float1, float2){
      return float1 * float2;
    }


    function percentuation(){
      
      count2 = parseFloat(display);
      let result = count2 / 100;
      setDisplay(String(result));
      setBuffer(result);


    };
    
    function calculation(){
      
      let result;
      count2 = parseFloat(display);

      if (!display == " "){
        
        
        switch(operator){
          case 'somar':
            console.log(`somando  ${count1} + ${count2}`);
            
            result = soma(count1, count2);
            setDisplay(String(result));
            setBuffer(result);
            setOperator(" ");
            console.log(`count1 = ${count1} `);
            console.log(`count2 = ${count2} `);
            console.log(`buffer = ${buffer} `);
           
          break;

          case 'subtrair':
            console.log(`subtraindo  ${count1} + ${count2}`);
            
            result = subtracao(count1, count2);
            setDisplay(String(result));
            setBuffer(result);
            setOperator(" ");
            console.log(`count1 = ${count1} `);
            console.log(`count2 = ${count2} `);
            console.log(`buffer = ${buffer} `);
           
          break;

          case 'multiplicar':
            result = multiplicacao(count1, count2);
            setDisplay(String(result));
            setBuffer(result);
            setOperator(" ");
            console.log(`count1 = ${count1} `);
            console.log(`count2 = ${count2} `);
            console.log(`buffer = ${buffer} `);
            
          break;

          case 'dividir':
            result = divisao(count1, count2);
            setDisplay(String(result));
            setBuffer(result);
            setOperator(" ");
            console.log(`count1 = ${count1} `);
            console.log(`count2 = ${count2} `);
            console.log(`buffer = ${buffer} `);
          
          break;
        };

      };
      
    };




    function clear(){

      const clear = display.substring(0, display.length - 1 );
      setDisplay(clear);
      setBuffer(clear);
      if (clear.length = 0){
        setBuffer(" ");
      };
    };

    function reset(){

      setCount1(0);
      count2 = 0 ;
      setBuffer(" ");
      setDisplay(" ");
      setOperator(" ");

    };
    
    

    function addDisplayer(caracter){

      var doteCaracter = false;

      for(var c = 0; c <= display.length; c++){
        
        if( display[c] === '.' ){
          doteCaracter = true;
          break; 
        };
      };
      
      console.log(doteCaracter);

      if( caracter == '.' && doteCaracter ){
          setDisplay(display);
          
      }else{
      const addDisplay = display + caracter;
      setDisplay(addDisplay);
      
      };
    };


  return (
    <View style={styles.container}>
      <Text>Calculadora</Text>


      <View name="result" style={styles.calc} >
  <Text style={styles.result} >{display}</Text>
        </View>

      <View name="buttonsLine" style={styles.buttonsLine} >
        <TouchableOpacity style={styles.buttons} onPress={reset} >
          <Text style={styles.symbal}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={clear}>
          <Feather name="delete" size={24} color="#EF9B3A" ></Feather>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={percentuation}>
          <Text style={styles.symbal} >%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} 
          onPress={() => handleOperator('multiplicar')} >
          <Text style={styles.symbal} >x</Text>
        </TouchableOpacity>
      </View>

      <View name="buttonsLine" style={styles.buttonsLine}>
      <TouchableOpacity style={styles.buttons} 
          onPress={() => addDisplayer('7')} >
          <Text style={styles.numbers} >7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}  
          onPress={() => addDisplayer('8')} >
          <Text style={styles.numbers} >8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} 
          onPress={() => addDisplayer('9')} >
          <Text style={styles.numbers} >9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} 
          onPress={() => handleOperator('somar')} >
          <Text style={styles.symbal} >+</Text>
        </TouchableOpacity>
      </View>

      <View name="buttonsLine" style={styles.buttonsLine}>
        <TouchableOpacity style={styles.buttons} 
          onPress={() => addDisplayer('4')} >
            <Text style={styles.numbers} >4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} 
          onPress={() => addDisplayer('5')} >
          <Text style={styles.numbers}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} 
          onPress={() => addDisplayer('6')} >
          <Text style={styles.numbers} >6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} 
          onPress={() => handleOperator('subtrair')} >
          <Text style={styles.symbal} >-</Text>
        </TouchableOpacity>
      </View>

      <View name="buttonsLine" style={styles.buttonsLine}>
      <TouchableOpacity style={styles.buttons} 
          onPress={() => addDisplayer('1')} >
          <Text style={styles.numbers} >1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} 
          onPress={() => addDisplayer('2')} >
          <Text style={styles.numbers} >2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} 
          onPress={() => addDisplayer('3')} >
          <Text style={styles.numbers} >3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} 
          onPress={() => handleOperator('dividir')} >
          <Text style={styles.symbal} >/</Text>
        </TouchableOpacity>
      </View>

      <View name="buttonsLine" style={styles.buttonsLine}>
      <TouchableOpacity style={styles.buttons, styles.buttonsExpand} 
        onPress={() => addDisplayer('0')} >
          <Text style={styles.numbers} >0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} 
          onPress={() => addDisplayer('.')} >
          <Text style={styles.symbal} >.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={calculation}>
          <Text style={styles.symbal} >=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
