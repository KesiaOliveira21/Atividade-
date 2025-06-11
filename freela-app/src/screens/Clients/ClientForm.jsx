import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ClientForm({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [address, setAddress] = useState('');

  const saveClient = async () => {
    const newClient = { name, email, phone, birthdate, address };
    const stored = await AsyncStorage.getItem('clients');
    const clients = stored ? JSON.parse(stored) : [];
    clients.push(newClient);
    await AsyncStorage.setItem('clients', JSON.stringify(clients));
    navigation.goBack();
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput label="Name" value={name} onChangeText={setName} />
      <TextInput label="Email" value={email} onChangeText={setEmail} />
      <TextInput label="Phone" value={phone} onChangeText={setPhone} />
      <TextInput label="Birthdate" value={birthdate} onChangeText={setBirthdate} />
      <TextInput label="Address" value={address} onChangeText={setAddress} />
      <Button mode="contained" onPress={saveClient}>Save</Button>
    </View>
  );
}
