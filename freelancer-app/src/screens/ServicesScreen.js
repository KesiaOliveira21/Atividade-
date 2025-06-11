// src/screens/ServicesScreen.js
import React, { useState, useEffect } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import {
  TextInput,
  Button,
  Card,
  Title,
  Paragraph,
  Text
} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ServicesScreen() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('');
  const [preco, setPreco] = useState('');
  const [contato, setContato] = useState('');
  const [servicos, setServicos] = useState([]);
  const [editandoIndex, setEditandoIndex] = useState(null);

  useEffect(() => {
    carregarServicos();
  }, []);

  const carregarServicos = async () => {
    const data = await AsyncStorage.getItem('servicos');
    if (data) setServicos(JSON.parse(data));
  };

  const salvarServicos = async novosServicos => {
    setServicos(novosServicos);
    await AsyncStorage.setItem('servicos', JSON.stringify(novosServicos));
  };

  const limparFormulario = () => {
    setTitulo('');
    setDescricao('');
    setCategoria('');
    setPreco('');
    setContato('');
    setEditandoIndex(null);
  };

  const handleSalvar = () => {
    if (!titulo || !descricao || !categoria || !preco || !contato) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    const novoServico = { titulo, descricao, categoria, preco, contato };

    if (editandoIndex !== null) {
      const atualizados = [...servicos];
      atualizados[editandoIndex] = novoServico;
      salvarServicos(atualizados);
    } else {
      salvarServicos([...servicos, novoServico]);
    }

    limparFormulario();
  };

  const handleEditar = index => {
    const servico = servicos[index];
    setTitulo(servico.titulo);
    setDescricao(servico.descricao);
    setCategoria(servico.categoria);
    setPreco(servico.preco);
    setContato(servico.contato);
    setEditandoIndex(index);
  };

  const handleExcluir = index => {
    Alert.alert('Confirmar', 'Deseja excluir este serviço?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: () => {
          const atualizados = servicos.filter((_, i) => i !== index);
          salvarServicos(atualizados);
        }
      }
    ]);
  };

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text variant="titleLarge" style={{ marginBottom: 16 }}>
        Cadastro de Serviços
      </Text>

      <TextInput
        label="Título"
        value={titulo}
        onChangeText={setTitulo}
        style={{ marginBottom: 8 }}
      />
      <TextInput
        label="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        style={{ marginBottom: 8 }}
      />
      <TextInput
        label="Categoria"
        value={categoria}
        onChangeText={setCategoria}
        style={{ marginBottom: 8 }}
      />
      <TextInput
        label="Preço"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
        style={{ marginBottom: 8 }}
      />
      <TextInput
        label="Contato"
        value={contato}
        onChangeText={setContato}
        keyboardType="phone-pad"
        style={{ marginBottom: 16 }}
      />

      <Button mode="contained" onPress={handleSalvar}>
        {editandoIndex !== null ? 'Atualizar' : 'Salvar'}
      </Button>

      <View style={{ marginTop: 24 }}>
        <Text variant="titleMedium">Serviços Cadastrados</Text>
        {servicos.map((servico, index) => (
          <Card key={index} style={{ marginTop: 12 }}>
            <Card.Content>
              <Title>{servico.titulo}</Title>
              <Paragraph>{servico.descricao}</Paragraph>
              <Text>Categoria: {servico.categoria}</Text>
              <Text>Preço: R$ {servico.preco}</Text>
              <Text>Contato: {servico.contato}</Text>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => handleEditar(index)}>Editar</Button>
              <Button onPress={() => handleExcluir(index)}>Excluir</Button>
            </Card.Actions>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}
