import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback, Image, SectionList, Switch } from 'react-native';
import { NavigationContainer, useLinkProps} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import login from './src/pages/login';
import cadastro from './src/pages/cadastro';
import users from './src/pages/users';

export default function App() {
  const Stack = createStackNavigator()
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="users" component={users} />
          <Stack.Screen name="login" component={login} />
          <Stack.Screen name="cadastro" component={cadastro} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}