import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet, Alert } from 'react-native';
import { FAB, List, Divider, ActivityIndicator } from 'react-native-paper';
import api from '../../services/api';

export default function ServiceList({ navigation }) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadServices() {
    setLoading(true);
    try {
      const response = await api.get('/services');
      setServices(response.data);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar os serviços.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadServices);
    return unsubscribe;
  }, [navigation]);

  function handleDelete(id) {
    Alert.alert('Confirmação', 'Deseja deletar esse serviço?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Deletar',
        style: 'destructive',
        onPress: async () => {
          try {
            await api.delete(`/services/${id}`);
            loadServices();
          } catch (error) {
            Alert.alert('Erro', 'Não foi possível deletar o serviço.');
          }
        },
      },
    ]);
  }

  function renderItem({ item }) {
    return (
      <>
        <List.Item
          title={item.title}
          description={`Preço: R$ ${item.price.toFixed(2)} - Disponível: ${item.available ? 'Sim' : 'Não'}`}
          onPress={() => navigation.navigate('ServiceDetails', { serviceId: item.id })}
          onLongPress={() => handleDelete(item.id)}
          left={props => <List.Icon {...props} icon="briefcase" />}
        />
        <Divider />
      </>
    );
  }

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator animating={true} size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={services}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <Divider />}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        label="Novo Serviço"
        onPress={() => navigation.navigate('ServiceForm')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
