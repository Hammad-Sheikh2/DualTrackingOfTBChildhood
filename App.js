import { StyleSheet, Text, View, StatusBar } from 'react-native';
import TopBar from './Components/TopBar.js';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <TopBar />
    </View>
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
