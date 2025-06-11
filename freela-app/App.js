import React, { useEffect, useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { getUserFromStorage } from './src/storage/auth';

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const storedUser = await getUserFromStorage();
      if (storedUser) setUser(storedUser);
      setLoading(false);
    }
    loadUser();
  }, []);

  if (loading) return null; // Você pode colocar splash screen aqui

  return (
    <PaperProvider>
      <NavigationContainer>
        <StackNavigator user={user} setUser={setUser} />
      </NavigationContainer>
    </PaperProvider>
  );
}
