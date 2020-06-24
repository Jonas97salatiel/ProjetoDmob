import React from 'react';
import { WebView } from 'react-native-webview';

export default function Navigator(){
      // Apenas chamando o componente em JSX WebView e passar o parâmetro da url ele já abre a página solicitada.
  return(
      <WebView
        source={{ uri: 'https://google.com/' }}
        style={{ marginTop: 20 }}
      />
   
  );
};