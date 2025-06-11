import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import RootNavigation from './src/navigation';

export default function App() {
  return (
    <PaperProvider>
      <RootNavigation />
    </PaperProvider>
  );
}
