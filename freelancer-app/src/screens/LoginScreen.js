import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, HelperText } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation, setUserToken }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = async () => {
    try {
      const usuarioSalvo = await AsyncStorage.getItem('user');
      const usuario = JSON.parse(usuarioSalvo);

      if (usuario && usuario.email === email && usuario.senha === senha) {
        setErro('');
        await AsyncStorage.setItem('userToken', 'token-fake'); // Pode ser qualquer string
        setUserToken('token-fake');
      } else {
        setErro('Email ou senha inválidos.');
      }
    } catch (e) {
      console.error('Erro ao fazer login:', e);
      setErro('Erro ao acessar os dados.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

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

      {erro ? <HelperText type="error">{erro}</HelperText> : null}

      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Entrar
      </Button>

      <Button onPress={() => navigation.navigate('Cadastro')}>
        Não tem conta? Cadastre-se
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

export default LoginScreen;
