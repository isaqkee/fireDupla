import { StatusBar } from 'expo-status-bar';
import { bancoExterno } from './firebaseConnection';
import { useEffect, useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function App() {

  const [nome] = useState('Adicione seus dados...');


  async function addBancoExterno1() {
    await setDoc(doc(bancoExterno, "funcionários", "dados1"), {
      Nome: "L.Barbosa",
      CPF: "1234567899-x",
      Profissão: "Soldador"
    });
  }


  async function addBancoExterno2() {
    await setDoc(doc(bancoExterno, "funcionários", "dados2"), {
      Nome: "Diego",
      CPF: "167543886-90",
      Profissão: "Uber"
    });
  }


  async function addBancoExterno3() {
    await setDoc(doc(bancoExterno, "funcionários", "dados3"), {
      Nome: "Isaque",
      CPF: "147567886-78",
      Profissão: "Professor"
    });
  }

  useEffect(() => {
    
  }, []);

  return (
    
    <View style={styles.container}>
      <Image source={require('./assets/Checklist.gif')} style={styles.gif}></Image>
      <Text style={{ fontSize: 25 }}>Informação: {nome}</Text>
      <TouchableOpacity style={styles.button} onPress={addBancoExterno1}>
        <Text style={styles.buttonText}>Adicionar Dados 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={addBancoExterno2}>
        <Text style={styles.buttonText}>Adicionar Dados 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={addBancoExterno3}>
        <Text style={styles.buttonText}>Adicionar Dados 3</Text>
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
  button: {
    backgroundColor: '#FFA500', // cor laranja
    padding: 10,
    borderRadius: 5,
    marginVertical: 10, // adiciona espaço vertical entre os botões
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  gif: {
    width: 250,
    height: 250,
    marginBottom: 20,
  }
});
