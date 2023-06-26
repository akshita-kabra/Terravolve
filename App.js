const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import ScreenMarketplace from "./screens/ScreenMarketplace";
import ScreenCheckout from "./screens/ScreenCheckout";
import ScreenBuyToken2 from "./screens/ScreenBuyToken2";
import ScreenBuyToken1 from "./screens/ScreenBuyToken1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="ScreenMarketplace"
              component={ScreenMarketplace}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ScreenCheckout"
              component={ScreenCheckout}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ScreenBuyToken2"
              component={ScreenBuyToken2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ScreenBuyToken1"
              component={ScreenBuyToken1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
