import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

    const [display, setDisplay] = useState(' ');
    const [count1, setCount1] = useState();
    var count2;
    const [operator, setOperator] = useState(' ');
    const [buffer, setBuffer] = useState();
   



    
    function handleOperator(operatorOption){
          

      if( !display == ' '){
        console.log('iniciado equação');
        switch(operatorOption){     
          case 'somar':
            setOperator(operatorOption);
            setCount1(parseFloat(display));
            setDisplay(' ');
            
          break;

          case 'subtrair':
            setOperator(operatorOption);
            setCount1(parseFloat(display));
            setDisplay(' ');
            
          break;

          case 'multiplicar':
            setOperator(operatorOption);
            setCount1(parseFloat(display));
            setDisplay(' ');
            
          break;

          case 'dividir':
            setOperator(operatorOption);
            setCount1(parseFloat(display));
            setDisplay(' ');
            
          break;

        }
        
      }else if(!buffer == " "){
        console.log('mudando equação');
        switch(operatorOption){
          case 'somar':
            setOperator(operatorOption);
            setCount1(buffer);
            setDisplay(' ');
            
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

        }

      }; 

    };

    function soma(float1, float2){
      return float1 + float2;
    }


    
    function calculation(){
      
      count2 = parseFloat(display);

      if (!display == ' '){
        
        
        switch(operator){
          case 'somar':
            console.log(`somando  ${count1} + ${count2}`);
            
            const result = soma(count1, count2);
            setDisplay(String(result));
            setBuffer(result);
            console.log(`count1 = ${count1} `);
            console.log(`count2 = ${count2} `);
            console.log(`buffer = ${buffer} `);
           
          break;

          case 'subtrair':
            setDisplay( count1 - count2);
            setCount1(0);
            setCount2(0);
           
          break;

          case 'multiplicar':
            setDisplay( count1 * count2);
            setCount1(0);
            setCount2(0);
            
          break;

          case 'dividir':
            setDisplay( count1 / count2);
            setCount1(0);
            setCount2(0);
          
          break;
        }

      }
      
    }




    function clear(){

      const clear = display.substring(0, display.length - 1 );
      setDisplay(clear);
      setBuffer(clear);
      if (clear.length = 0){
        setBuffer(' ');
      };
    }

    function reset(){

      setCount1(0);
      count2 = 0 ;
      setBuffer(' ');
      setDisplay(' ');

    };

    function addDisplayer(caracter){

      if( caracter == '.' && display[display.length - 1] == '.'){
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
        <TouchableOpacity style={styles.buttons, styles.buttonsExpand1} onPress={reset} >
          <Text style={styles.symbal}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={clear}>
          <Text style={styles.symbal} >#</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={calculation}>
          <Text style={styles.symbal} >=</Text>
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
        <TouchableOpacity style={styles.buttons} 
          onPress={() => handleOperator('multiplicar')} >
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
