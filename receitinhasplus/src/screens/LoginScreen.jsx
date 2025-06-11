import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, Title, HelperText } from 'react-native-paper';
import useAuth from '../hooks/useAuth';

export default function LoginScreen() {
  const { login, register } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      setError('');
      if (isRegistering) {
        await register(email, password);
      } else {
        await login(email, password);
      }
    } catch (e) {
      setError('Erro: ' + e.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.inner}>
        <Title style={{ marginBottom: 20 }}>Receitinha+ Login</Title>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />
        <TextInput
          label="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        {error ? <HelperText type="error">{error}</HelperText> : null}

        <Button mode="contained" onPress={handleSubmit} style={styles.button}>
          {isRegistering ? 'Registrar' : 'Entrar'}
        </Button>

        <Button onPress={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Já tenho conta' : 'Criar nova conta'}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  inner: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
  },
});
