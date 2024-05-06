import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import LoginScreen from "./src/screens/LoginScreen";
import MoviesScreen from "./src/screens/MoviesScreen";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { persistor, store } from "./src/store";
import SplashScreen from "./src/screens/SplashScreen";


const Stack = createNativeStackNavigator();


const queryClient = new QueryClient();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18n}>
          <PaperProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
              <NavigationContainer>
                <Stack.Navigator
                  screenOptions={{
                    headerShown: false,
                  }}
                >
                  <Stack.Screen
                    name={'splash'}
                    component={SplashScreen}
                  />
                  <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                  />
                  <Stack.Screen
                    name="Movies"
                    component={MoviesScreen}
                  />
                </Stack.Navigator>
              </NavigationContainer>
            </QueryClientProvider>
          </PaperProvider>
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
};


export default App;