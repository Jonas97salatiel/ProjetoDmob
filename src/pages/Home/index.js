import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Home(){

  const navigation = useNavigation();

  return(
    <View style={styles.container} >

      <View style={styles.cabecario}>
      <Text>Desenvolvimento mobile</Text>
      <Text>7.º Semestre</Text>
      <Text>Jonas Salatiel</Text>
      <Text>CPD: 041101</Text>
      </View>

      <View style={styles.apps}>
        <View style={styles.title} >
          <Text style={styles.textTitle} >Apps</Text>
        </View>
        <View style={styles.lineIcons}>
          <TouchableOpacity style={styles.icons} onPress={() => navigation.navigate('Calculator')}>
            <Icon name="calculator" size={48} color="#adadad"> </Icon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons} onPress={() => navigation.navigate('Navigator')}>
            <Icon name="search" size={48} color="#adadad"> </Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.lineIcons} >
          <TouchableOpacity style={styles.icons} onPress={() => navigation.navigate('Contacts')}>
            <Icon name="address-book" size={48} color="#adadad"> </Icon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons} onPress={() => navigation.navigate('Localization')}>
            <Icon name="map-marker" size={58} color="#adadad"> </Icon>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  
  )

};