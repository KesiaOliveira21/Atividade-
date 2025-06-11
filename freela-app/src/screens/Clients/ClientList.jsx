import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { Button, List } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ClientList({ navigation }) {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const loadClients = async () => {
      const data = await AsyncStorage.getItem('clients');
      if (data) setClients(JSON.parse(data));
    };
    const unsubscribe = navigation.addListener('focus', loadClients);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ padding: 16 }}>
      <Button mode="contained" onPress={() => navigation.navigate('ClientForm')}>New Client</Button>
      <FlatList
        data={clients}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <List.Item title={item.name} description={item.email} />}
      />
    </View>
  );
}
