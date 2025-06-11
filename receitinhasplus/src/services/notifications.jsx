import * as Notifications from 'expo-notifications';

export async function requestPermission() {
  const { status } = await Notifications.requestPermissionsAsync();
  return status === 'granted';
}

export async function scheduleNotification(title, body) {
  await Notifications.scheduleNotificationAsync({
    content: { title, body },
    trigger: null,
  });
}
