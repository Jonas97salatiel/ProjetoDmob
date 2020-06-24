import React, { useEffect, useState}from 'react';
import { View, Text, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import styles from './styles';

export default function Localization(){

const [region, setRegion] = useState(); // State que recebe um objeto que passa a localização atual do usuário.

  async function currentLocalization( ){ // Função responsável por consultar a latitude e longitude atual do usuário.
      navigator.geolocation.getCurrentPosition(
          ({coords: { latitude, longitude}}) => {  
            setRegion({
              latitude, 
              longitude, 
              latitudeDelta: 0.0143,
              longitudeDelta: 0.0134
            })
          },
          () => {},
          {
            timeout: 2000,
            enableHighAccuracy: true,
            maximumAge: 1000,

          }
      );
  };
  currentLocalization();

  return(
    <View style={styles.container}>
        <MapView  showsUserLocation loadingEnabled
          style={styles.mapStyle} 
          region={region}
          >
        </MapView>
    </View>
  );

};