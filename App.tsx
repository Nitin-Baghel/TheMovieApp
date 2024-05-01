import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import LoginScreen from './src/screens/LoginScreen';
import MoviesScreen from './src/screens/MoviesScreen';
import { Provider } from 'react-redux';

import store from './src/store';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Import your i18n configuratio

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <PaperProvider>
            <NavigationContainer>
              <Stack.Navigator
                screenOptions={{
                  headerShown: false
                }}>
                <Stack.Screen

                  name="Login"
                  component={LoginScreen}
                  options={{ title: 'Login' }}
                />
                <Stack.Screen
                  name="Movies"
                  component={MoviesScreen}
                  options={{ title: 'Movie List' }}
                />
              </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
      </I18nextProvider>
    </Provider>
  );
};

export default App;
