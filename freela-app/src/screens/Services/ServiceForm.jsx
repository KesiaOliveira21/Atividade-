import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function ServiceForm({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [available, setAvailable] = useState(false);

  const handleSubmit = () => {
    if (!title || !description) {
      alert('Please fill title and description');
      return;
    }
    // salvar serviço via API
    alert('Service saved!');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput label="Title" value={title} onChangeText={setTitle} style={styles.input} />
      <TextInput
        label="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <TextInput label="Price" value={price} onChangeText={setPrice} style={styles.input} />
      <TextInput label="Date" value={date} onChangeText={setDate} style={styles.input} />
      <Button mode="contained" onPress={handleSubmit} style={{ marginTop: 20 }}>
        Save Service
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { marginBottom: 15 },
});
