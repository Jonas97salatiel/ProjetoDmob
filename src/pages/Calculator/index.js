import React, {useState} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

export default function Calculator(){

  const [display, setDisplay] = useState(" "); // State que recebe os valores do display.
  const [count1, setCount1] = useState(); // State que recebe o valor do display quando o usuário seleciona uma operação.
  var count2; // variável que recebe o valor do display para realizar os cálculos.
  const [operator, setOperator] = useState(" "); // State que recebe a operação selecionada no TouchableOpacity.
  const [buffer, setBuffer] = useState(" "); // State que recebe o resultado das operação para caso o usuário queira reutilizar o valor.
 
  function handleOperator(operatorOption){ // Função que seta a operação solicitada pelo usuário.
        
    if( !display == " " && operator == " "){  // Condição não deixa o usuário tentar fazer uma operação com o display vazio.
      console.log('iniciado equação');
      switch(operatorOption){  // Condicional para setar a operação de acordo com a opção de operação selecionanda.
        case 'somar':
          setOperator(operatorOption); // incluindo o operador no state operator.
          setCount1(parseFloat(display)); // passando o valor do display para o state count01.
          setDisplay(" "); // limpando o display para que o usuário coloque o segundo numeral da operação.
          
        break;

        case 'subtrair':
          setOperator(operatorOption); // incluindo o operador no state operator.
          setCount1(parseFloat(display)); // passando o valor do display para o state count01.
          setDisplay(" "); // limpando o display para que o usuário coloque o segundo numeral da operação.
          
        break;

        case 'multiplicar':
          setOperator(operatorOption); // incluindo o operador no state operator.
          setCount1(parseFloat(display)); // passando o valor do display para o state count01.
          setDisplay(" "); // limpando o display para que o usuário coloque o segundo numeral da operação.
          
        break;

        case 'dividir':
          setOperator(operatorOption); // incluindo o operador no state operator.
          setCount1(parseFloat(display)); // passando o valor do display para o state count01.
          setDisplay(" "); // limpando o display para que o usuário coloque o segundo numeral da operação.
          
        break;

      };
      
    }else if(!buffer == " " || !operator == " "){ // Essa verificação garante que o usuário pode alterar a operação caso necessário.
      console.log('mudando equação');
      switch(operatorOption){
        case 'somar':
          setOperator(operatorOption); // Setando nova operação no state operator

        break;

        case 'subtrair':
          setOperator(operatorOption); // Setando nova operação no state operator
          
        break;

        case 'multiplicar':
          setOperator(operatorOption); // Setando nova operação no state operator
          
        break;

        case 'dividir':
          setOperator(operatorOption); // Setando nova operação no state operator
         
        break;

      };

    }; 

  };

  function soma(float1, float2){ // Função responsável por fazer a soma.
    return float1 + float2;
  }

  function subtracao(float1, float2){ // Função responsável por fazer a subtração.
    return float1 - float2;
  }

  function divisao(float1, float2){ // Função responsável por fazer a divisão.
    return float1 / float2;
  }

  function multiplicacao(float1, float2){ // Função responsável por fazer a multiplicação.
    return float1 * float2;
  }

  function percentuation(){ // Função responsável por fazer a o calculo do percentual
    
    count2 = parseFloat(display);
    let result = count2 / 100;
    setDisplay(String(result));
    setBuffer(result);
  };
  
  function calculation(){ // Função responsável por realizar a chamado da função de calculo e exibir o resultado na tela.
    
    let result; 
    count2 = parseFloat(display);

    if (!display == " "){ // Função para gantir que o usuário não a acione sem digitar nenhum valor. 
      
      switch(operator){ // Verificação para saber qual o operador para realizar a operação.
        case 'somar': 
          console.log(`somando  ${count1} + ${count2}`); 
          
          result = soma(count1, count2); // Chamada da função que irá realizar o calculo.
          setDisplay(String(result)); // Retorno do resultado para o usuário.
          setBuffer(result); // Setando o resultado para ser reutilizado caso o usuário queria.
          setOperator(" "); // Limpando o operator para que o usuário possa solicitar uma nova operação.
          console.log(`count1 = ${count1} `);
          console.log(`count2 = ${count2} `);
          console.log(`buffer = ${buffer} `);
         
        break;

        case 'subtrair':
          console.log(`subtraindo  ${count1} + ${count2}`);
          
          result = subtracao(count1, count2); // Chamada da função que irá realizar o calculo.
          setDisplay(String(result)); // Retorno do resultado para o usuário.
          setBuffer(result); // Setando o resultado para ser reutilizado caso o usuário queria.
          setOperator(" "); // Limpando o operator para que o usuário possa solicitar uma nova operação.
          console.log(`count1 = ${count1} `);
          console.log(`count2 = ${count2} `);
          console.log(`buffer = ${buffer} `);
         
        break;

        case 'multiplicar':
          result = multiplicacao(count1, count2); // Chamada da função que irá realizar o calculo.
          setDisplay(String(result)); // Retorno do resultado para o usuário.
          setBuffer(result); // Setando o resultado para ser reutilizado caso o usuário queria.
          setOperator(" "); // Limpando o operator para que o usuário possa solicitar uma nova operação.
          console.log(`count1 = ${count1} `);
          console.log(`count2 = ${count2} `);
          console.log(`buffer = ${buffer} `);
          
        break;

        case 'dividir':
          result = divisao(count1, count2); // Chamada da função que irá realizar o calculo.
          setDisplay(String(result)); // Retorno do resultado para o usuário.
          setBuffer(result); // Setando o resultado para ser reutilizado caso o usuário queria.
          setOperator(" "); // Limpando o operator para que o usuário possa solicitar uma nova operação.
          console.log(`count1 = ${count1} `);
          console.log(`count2 = ${count2} `);
          console.log(`buffer = ${buffer} `);
        
        break;
      };

    };
    
  };




  function clear(){ // Função responsável por limpar o display uma posição por vez.

    const clear = display.substring(0, display.length - 1 ); // Função responsável por subtrair uma posição do array do display.
    setDisplay(clear); // Retornando o novo valor do display para o usuário
    setBuffer(clear);
    if (clear.length = 0){ // Verificação para previnir que o usuário não tente excluir um array sem posição e bug o app.
      setBuffer(" "); 
    };
  };

  function reset(){ // Função para limpar os dados da calculadora.

    setCount1(0);
    count2 = 0 ;
    setBuffer(" ");
    setDisplay(" ");
    setOperator(" ");

  };
  
  function addDisplayer(caracter){ // Função responsável por renderizar os números no display para o usuário

    var doteCaracter = false; // Variável booleana utilizada para verificar se já existe um "." no display.

    for(var c = 0; c <= display.length; c++){ // Verificação do array para que o usuário não coloque mais de 1 "." no display.
      
      if( display[c] === '.' ){
        doteCaracter = true;
        break; 
      };
    };
    

    if( caracter == '.' && doteCaracter ){ // Caso haja um "." o app simplimente retorna o que já esta no display.
        setDisplay(display);
        
    }else{
    const addDisplay = display + caracter; // Inclusão do novo caracter no display
    setDisplay(addDisplay);
    
    };
  };


return (
  <View style={styles.container}>


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

