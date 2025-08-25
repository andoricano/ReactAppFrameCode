/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { enableScreens } from 'react-native-screens';
enableScreens();
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {SafeAreaProvider,useSafeAreaInsets,} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import PgMenuScreen from './screen/playground/PgMenuScreen';
import PgTextInputScreen from './screen/playground/PgTextInputScreen';
import PgTextScreen from './screen/playground/PgTextScreen';

type NaviStackList = {
  Home: undefined;
  PgMenu: undefined;
  PgTextInput: undefined;
  PgText: undefined;
};

const screens: { name: keyof NaviStackList; component: React.ComponentType<any> }[] = [
  { name: 'Home', component: HomeScreen },
  { name: 'PgMenu', component: PgMenuScreen },
  { name: 'PgTextInput', component: PgTextInputScreen },
  { name: 'PgText', component: PgTextScreen },
];

const Stack = createNativeStackNavigator<NaviStackList>();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content"/>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          {screens.map(screen => (
            <Stack.Screen
              key={screen.name}
              name={screen.name}
              component={screen.component}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;