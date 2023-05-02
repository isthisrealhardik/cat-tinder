import { StyleSheet, Text, View } from 'react-native';
import Main from './screens/main';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './navigation/nav';

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
