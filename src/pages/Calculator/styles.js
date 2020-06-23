import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
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
    borderColor:'#333333',
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
    borderColor:'#333333',
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
    color:'#333333',
    marginRight:30,
    
  },


});
