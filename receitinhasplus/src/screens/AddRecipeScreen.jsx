import React, { useState, useEffect } from 'react';
import { ScrollView, Alert, View, Image, StyleSheet } from 'react-native';
import { TextInput, Button, Title, HelperText } from 'react-native-paper';
import { saveRecipe } from '../services/storage';
import { validateRecipe } from '../utils/validation';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

export default function AddRecipeScreen({ navigation }) {
  const [form, setForm] = useState({
    title: '',
    ingredients: '',
    steps: '',
    category: '',
    time: ''
  });
  const [errors, setErrors] = useState({});
  const [hasPermission, setHasPermission] = useState(null);
  const [photoUri, setPhotoUri] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async () => {
    const validation = validateRecipe(form);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }
    // Salvar foto junto com a receita (URI)
    const recipeToSave = { ...form, photoUri };
    await saveRecipe(recipeToSave);

    // Notificação local
    const { status } = await Notifications.getPermissionsAsync();
    if (status !== 'granted') {
      await Notifications.requestPermissionsAsync();
    }
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Receita salva!",
        body: `Sua receita "${form.title}" foi salva com sucesso.`,
      },
      trigger: null,
    });

    Alert.alert('Sucesso', 'Receita salva!');
    navigation.goBack();
  };

  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      setPhotoUri(photo.uri);
      setIsCameraOpen(false);
    }
  };

  if (hasPermission === null) {
    return <Title>Pedindo permissão da câmera...</Title>;
  }
  if (hasPermission === false) {
    return <Title>Sem permissão para usar a câmera</Title>;
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      {isCameraOpen ? (
        <Camera style={{ height: 300 }} ref={ref => setCameraRef(ref)}>
          <Button mode="contained" onPress={takePicture} style={{ marginTop: 10 }}>
            Tirar Foto
          </Button>
          <Button mode="outlined" onPress={() => setIsCameraOpen(false)} style={{ marginTop: 10 }}>
            Cancelar
          </Button>
        </Camera>
      ) : (
        <>
          <Title>Adicionar Receita</Title>
          <TextInput
            label="Título"
            value={form.title}
            onChangeText={(text) => handleChange('title', text)}
            style={styles.input}
          />
          {errors.title && <HelperText type="error">{errors.title}</HelperText>}

          <TextInput
            label="Ingredientes (separados por vírgula)"
            value={form.ingredients}
            onChangeText={(text) => handleChange('ingredients', text)}
            multiline
            style={styles.input}
          />
          {errors.ingredients && <HelperText type="error">{errors.ingredients}</HelperText>}

          <TextInput
            label="Modo de Preparo"
            value={form.steps}
            onChangeText={(text) => handleChange('steps', text)}
            multiline
            style={styles.input}
          />
          {errors.steps && <HelperText type="error">{errors.steps}</HelperText>}

          <TextInput
            label="Categoria"
            value={form.category}
            onChangeText={(text) => handleChange('category', text)}
            style={styles.input}
          />
          {errors.category && <HelperText type="error">{errors.category}</HelperText>}

          <TextInput
            label="Tempo de Preparo (minutos)"
            value={form.time}
            onChangeText={(text) => handleChange('time', text)}
            keyboardType="numeric"
            style={styles.input}
          />
          {errors.time && <HelperText type="error">{errors.time}</HelperText>}

          {photoUri && <Image source={{ uri: photoUri }} style={{ width: '100%', height: 200, marginBottom: 10 }} />}

          <Button mode="outlined" onPress={() => setIsCameraOpen(true)} style={{ marginBottom: 10 }}>
            Tirar Foto
          </Button>

          <Button mode="contained" onPress={handleSubmit}>
            Salvar Receita
          </Button>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
});
