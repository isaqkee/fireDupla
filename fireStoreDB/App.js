import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { bancoExterno } from './firebaseConnection';
import { useEffect, useState } from 'react';

export default function App() {

  const [nome, trocaNome] = useState('Carregando...');

  useEffect(() => {
    async function pegarDados() {

    }
    pegarDados();

  }, [])


  return (
    <View style={styles.container}>
      <Text style={{fontSize:25}}>Informação:</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
