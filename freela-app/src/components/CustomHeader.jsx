import React from 'react';
import { Appbar } from 'react-native-paper';

export default function CustomHeader({ title, back, navigation }) {
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={() => navigation.goBack()} /> : null}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}
