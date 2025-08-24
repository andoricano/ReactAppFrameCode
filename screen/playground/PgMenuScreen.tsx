import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import PgBaseScreen from './PgBaseScreen';

export default function PgMenuScreen({ navigation }: any) {
  return (
    <PgBaseScreen style={styles.center}>
      <Text style={styles.title}>Playground Menu</Text>

      <View style={{ margin: 20 }}>
        <Button
          title="PgText"
          onPress={() => navigation.navigate('PgText')}
        />
      </View>

      <View style={{ 
        
       }}>
        <Button
          title="PgTextInput"
          onPress={() => navigation.navigate('PgTextInput')}
        />
      </View>
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