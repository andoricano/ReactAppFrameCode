import React from 'react';
import PgBaseScreen from './playground/PgBaseScreen';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

interface MenuItem {
  id: string;
  title: string;
  navigateTo: string;
}
const ItemCard = ({ item, navigation }: { item: MenuItem; navigation: any }) => {
  return (
    <View style={styles.itemCard}>
      <Button title={item.title} onPress={() => navigation.navigate(item.navigateTo)} />
    </View>
  );
};

interface CustomListProps {
  data: MenuItem[];
  navigation: any;
}

const CustomList = ({ data, navigation }: CustomListProps) => {
  return (
    <View style={{ height: 200 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemCard item={item} navigation={navigation} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      />
    </View>
  );
};

export default function HomeScreen({ navigation }: any) {
  const rawMenu = [
    { title: "Menu", navigateTo: "PgMenu" },
    { title: "Calendar", navigateTo: "PgMenu" },
    { title: "TextInput", navigateTo: "PgTextInput" },
    { title: "Text", navigateTo: "PgText" },
  ];

  const menuData: MenuItem[] = rawMenu.map((item, index) => ({
    id: index.toString(),
    ...item,
  }));

  return (

    <PgBaseScreen style={styles.center}>

      <Text style={styles.title}>Playground Menu</Text>

      <CustomList data={menuData} navigation={navigation} />

      <View style={{ margin: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button
          title="Calendar"
          onPress={() => navigation.navigate('Calendar')}
        />

        <Button
          title="AlarmList"
          onPress={() => navigation.navigate('AlarmList')}
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

  itemCard: {
    marginVertical: 10,
  },
  separator: {
    height: 10,
  },
});