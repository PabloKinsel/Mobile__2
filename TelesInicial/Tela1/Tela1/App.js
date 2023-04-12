import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.text2}>Minha jornada do React Native</Text>

      <View style={styles.input}>
        <Text style={styles.text}>Fundamentos do React Native</Text>
      </View>
      <View style={styles.input}>
        <Text style={styles.text}>Expo e Expo CLI</Text>
      </View>
      <View style={styles.input}>
        <Text style={styles.text}>Estilização com StyleSheet</Text>
      </View>
      <View style={styles.input2}>
        <Text style={styles.text}>Navegação</Text>
      </View>
      <View style={styles.input2}>
        <Text style={styles.text}>ScrollVlew e FlatList</Text>
      </View>
      <View style={styles.input2}>
        <Text style={styles.text}>Perifericos</Text>
      </View>
      <View style={styles.input2}>
        <Text style={styles.text}>Style Components</Text>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
  width:'95vw',
  height: 50,
  borderRadius: 10,
  backgroundColor:'#0fe185',
  marginBottom:15,
  },
  text: {
    font: 'Bold',
    marginTop:14,
    marginLeft:10,
    color:'#000000',
    //textAlign: 'center',
    //fontSize:'20px'
  },
  input2: {
    width:'95vw',
    height: 50,
    borderRadius: 10,
    backgroundColor:'#e14e4e',
    marginBottom:15,
  },
  text2:{
    font: 'Bold',
    marginTop:14,
    //marginLeft:'center',
    justifyContent: 'center',
    color:'#000000',
    marginBottom:50,
    fontSize: '25px',
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth
    
  }
});
