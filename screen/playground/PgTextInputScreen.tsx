import React, { useState } from "react";
import { FlatList, View, Alert, Button, Text, StyleSheet, TextInput } from 'react-native';
import PgBaseScreen from './PgBaseScreen';

interface Item {
  id: string;
  label: string;
  value: string;
}

const renderItem = ({ item, index }: { item: string; index: number }) => (
  <TextInput
    style={styles.input}
    value={item}
  />
);

export default function PgTextInputScreen() {
  const [data, setData] = useState<Item[]>([
    { id: "1", label: "Item 1", value: "" },
    { id: "2", label: "Item 2", value: "" },
    { id: "3", label: "Item 3", value: "" },
    { id: "4", label: "Item 1", value: "" },
    { id: "5", label: "Item 2", value: "" },
    { id: "6", label: "Item 3", value: "" },
    { id: "7", label: "Item 1", value: "" },
    { id: "8", label: "Item 2", value: "" },
  ]);
  const handleTextChange = (index: number, text: string) => {
    const newData = [...data];
    newData[index].value = text;
    setData(newData);
  };

  const handleSubmit = () => {
    console.log("FlatList 전체 상태:", data);
  };

  const renderItem = ({ item, index }: { item: Item; index: number }) => (
    <View style={styles.itemRow}>
      <Text style={styles.label}>{item.label}</Text>
      <TextInput
        style={styles.input}
        value={item.value}
        placeholder={`Enter ${item.label}`}
        onChangeText={(text) => handleTextChange(index, text)}
      />
    </View>
  );


  return (
    <PgBaseScreen>
      <View style={styles.center}>
        <Text style={styles.title}>Playground::TextInput</Text>
      </View>

      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </PgBaseScreen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: { padding: 16, height:500},
  itemRow: { flexDirection: "row", alignItems: "center", width: '100%'},
  label: { width: 60, fontWeight: "bold" },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 6,
  },
  center: { width: '100%'
  },
  separator: { height: 10 },
}
);