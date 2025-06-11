import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, HelperText } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CadastroScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleCadastro = async () => {
    if (!nome || !email || !senha || !confirmarSenha) {
      setErro('Todos os campos são obrigatórios.');
      return;
    }

    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem.');
      return;
    }

    // Cria objeto usuário
    const novoUsuario = {
      nome,
      email,
      senha
    };

    try {
      // Salva no AsyncStorage
      await AsyncStorage.setItem('user', JSON.stringify(novoUsuario));
      setErro('');
      alert('Cadastro realizado com sucesso!');
      navigation.navigate('Login');
    } catch (e) {
      console.error('Erro ao salvar usuário:', e);
      setErro('Erro ao salvar cadastro.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        label="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />

      <TextInput
        label="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
      />

      <TextInput
        label="Confirmar Senha"
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        secureTextEntry
        style={styles.input}
      />

      {erro ? <HelperText type="error">{erro}</HelperText> : null}

      <Button mode="contained" onPress={handleCadastro} style={styles.button}>
        Cadastrar
      </Button>

      <Button onPress={() => navigation.navigate('Login')}>
        Já tem conta? Fazer login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { marginBottom: 10 },
  button: { marginTop: 10 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
});

export default CadastroScreen;
