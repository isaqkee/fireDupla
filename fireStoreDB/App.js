import { StatusBar } from 'expo-status-bar';
import { bancoExterno } from './firebaseConnection';
import { useEffect, useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [nome] = useState('Carregando...');

  // Defina a função addBancoExterno fora do useEffect
  async function addBancoExterno() {
    await setDoc(doc(bancoExterno, "funcionários", "dados"), {
      TV: "Telefunken",
      Geladeira: "Continental",
      Fogão: "Consul"
    });
  }

  useEffect(() => {
    // Remova a chamada à função pegarDados se ela não estiver definida
    // pegarDados();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{fontSize:25}}>Informação: {nome}</Text>
      <TouchableOpacity style={{ backgroundColor:"#F50" }} onPress={addBancoExterno}>
        <Text style={{ fontSize: 20, paddingHorizontal:15 }}>Adicionar</Text>
      </TouchableOpacity>
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
