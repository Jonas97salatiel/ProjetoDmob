// Arquivos responsavel pela configuração das rotas do app.

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator(); // Criando objeto da classe createStackNavigator 
                                         // para poder passar os componentes como parametro para as rotas.


import Home from './pages/Home' 
import Calculator from './pages/Calculator'
import Contacts from './pages/Contacts'
import Localization from './pages/Localization'
import Navigator from './pages/Navigator'

export default function Routes(){
  return(
      <NavigationContainer>

        <AppStack.Navigator>
          <AppStack.Screen name="Home" component={Home} /> 
          <AppStack.Screen name="Calculator" component={Calculator} />
          <AppStack.Screen name="Contacts" component={Contacts} />
          <AppStack.Screen name="Localization" component={Localization} />
          <AppStack.Screen name="Navigator" component={Navigator} />
        </AppStack.Navigator>

      </NavigationContainer>
  );

}
