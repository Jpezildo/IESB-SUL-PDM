import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GerenciarDespesa from './screens/GerenciarDespesa';
import TodasDespesas from './screens/TodasDespesas';
import DespesaRecente from './screens/DespesaRecente';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IconButton from './IconButton';

export default function App() {
  const Tab = createBottomTabNavigator();

  function BottonTabScreen(){
  return (
  <Tab.Navigator
    screenOptions={( {navigation } ) => ({ headerRight: () => <IconButton icon="add" size={24} onPress={() => {navigation.navigate('GerenciarDespesa') }} />  })  }>

    <Tab.Screen name="DespesaRecente" component={DespesaRecente} options={{tabBarIcon:({color,size}) => (<Ionicons name="hourglass" size={size} color={color}/>),
    tabBarLabel: 'Recentes',
    title: 'Despesas Recentes',
    tabBarLabelStyle: { fontSize: 12}}}
    />
    <Tab.Screen name="TodasDespesas" component={TodasDespesas} 
    options={{tabBarIcon: ({color, size}) => (<Ionicons name="wallet-outline" size={size} color={color}/>),
    tabBarLabel: 'Todas',
    title: 'Todas as Despesas',
    tabBarLabelStyle: { fontSize: 12}}}
    />

  </Tab.Navigator>
  );
}
const styles = StyleSheet.create({ container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
});

const Stack = createNativeStackNavigator();
return(
  <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen name="Despesas" component={BottonTabScreen}
        options={{headerShown:false}}/>
      <Stack.Screen name="GerenciarDespesa" component={GerenciarDespesa}/>
    </Stack.Navigator>
  </NavigationContainer>
    );
  }

=======

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
>>>>>>> fb70b398b2ee2cfdf6aa647d42c90b50f451b443
