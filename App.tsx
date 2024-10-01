import { SafeAreaView, View, Text, Button, FlatList, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TabView } from 'react-native-tab-view';

export const Stack = createNativeStackNavigator();

const ScreenA = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView>
      <Button title="Navigate to B..." onPress={() => navigation.navigate('B')} />
    </SafeAreaView>
  );
};

const buttons = [...Array(100)].map((_, i) => ({ id: i.toString(), title: `Button ${i + 1}` }));

const renderButton = ({ item }: { item: { id: string; title: string } }) => (
  <View
    style={{
      margin: 10,
      backgroundColor: 'red',
      // borderWidth: 1,
      // borderColor: 'black',
    }}>
    <Pressable onPress={() => {}}>
      <Text>{item.title}</Text>
    </Pressable>
  </View>
);

const ScreenB = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TabView
        onIndexChange={() => {}}
        navigationState={{ index: 0, routes: [{ key: 'a' }] }}
        renderScene={() => {
          return (
            <FlatList data={buttons} renderItem={renderButton} keyExtractor={item => item.id} />
          );
        }}
      />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="A">
          <Stack.Screen name="A" component={ScreenA} />
          <Stack.Screen name="B" component={ScreenB} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;