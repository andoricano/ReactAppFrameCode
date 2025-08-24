import React from 'react';
import { Alert,Button, Text, StyleSheet } from 'react-native';
import PgBaseScreen from './PgBaseScreen';

export default function PgTextInputScreen() {
  return (
    <PgBaseScreen style={styles.center}>
      <Text style={styles.title}>Playground::TextInput</Text>
      <Button
        title="Button 1"
        onPress={() => Alert.alert('Button 1 pressed')}
      />
      <Button title="Button 2" onPress={() => console.log('Button 2 pressed')} />
    </PgBaseScreen>
  );
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});