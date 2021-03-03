import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/Redux/Store/configStore';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import Home from './src/components/Home';
import AsyncStorage from '@react-native-community/async-storage';


const Stack = createStackNavigator();
const NO_USER = 'NO_USER';


export default function App() {

  const [getToken, setGetToken] = useState();

  useEffect(() => {
    (async () => {
      const id = await AsyncStorage.getItem('token');
      id ? setGetToken(id) : setGetToken(NO_USER);
    })();
  }, []);


  return (
    <Provider store={store}>
      <NavigationContainer>
        {getToken && (
          <Stack.Navigator
            initialRouteName={getToken === NO_USER ? 'Login' : 'Home'}
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name='Login' component={Login} />
            {/* <Stack.Screen name='SignUp' component={SignUp} /> */}
            <Stack.Screen name='Home' component={Home} />
          </Stack.Navigator>
        )}
        <StatusBar barStyle='light-content' style='auto' />
      </NavigationContainer>
    </Provider>
  );
}
