import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';

const EscudoScreen = () => {
  return (
    <View style={styles.container}>
      <Title>Manchester United</Title>
<Image
  source={{ uri: 'https://pngimg.com/uploads/manchester_united/manchester_united_PNG5.png' }}
  style={styles.escudo}
/>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FF8C00', 
      alignItems: 'center',
      justifyContent: 'center',
    },
    escudo: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
    },
  });
  

export default EscudoScreen;
